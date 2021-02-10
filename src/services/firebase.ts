/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';
import 'firebase/storage';

import firebaseConfig from './firebaseConfig';
import ItemInterface from '../models/ItemInterface';
import ItemResponse from '../models/ItemResponse';
import AuthResponse from '../models/AuthResponse';
import GetItemResponse from '../models/GetItemResponse';
import SUCCESS from '../models/SuccessType';
import ERROR from '../models/ErrorType';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export const createItem = async (
  name: string,
  details: string,
  price: number,
  type: string,
  image: File,
): Promise<ItemResponse> => {
  // check if item does not exist
  const itemExists = await db
    .collection('items')
    .where('name', '==', name)
    .get()
    .then(item => {
      if (item.empty) return false;

      return true;
    })
    .catch(() => null);

  if (itemExists) {
    return { type: ERROR, message: 'Item already exists' };
  }

  // create item
  const result = await db
    .collection('items')
    .add({
      name,
      details,
      price,
      imageUrl: '',
      type,
      updatedAt: new Date(),
    })
    .catch(err => ({ error: String(err.message) }));

  if ('error' in result) {
    return { type: ERROR, message: result.error };
  }

  // get item
  const items: ItemInterface[] = [];
  const itemsResult = await db
    .collection('items')
    .where('name', '==', name)
    .get()
    .catch(err => ({ error: String(err.code) }));

  if ('error' in itemsResult) {
    return { type: ERROR, message: itemsResult.error };
  }

  itemsResult.forEach(item => {
    items.push({
      id: item.id,
      name: item.data().name,
      price: item.data().price,
      details: item.data().details,
      imageUrl: item.data().imageUrl,
      type: item.data().type,
    });
  });

  // upload image
  const storageRef = storage.ref('items').child(items[0].id);
  const imageResult = await storageRef
    .put(image)
    .catch(err => ({ error: String(err.code) }));

  if ('error' in imageResult) {
    return { type: ERROR, message: imageResult.error };
  }

  // update item image
  await storageRef
    .getDownloadURL()
    .then(async storagedImage => {
      items.forEach(async item => {
        await db.collection('items').doc(item.id).update({
          imageUrl: storagedImage,
        });
      });
    })
    .catch(err => ({ error: String(err.code) }));

  return { type: SUCCESS, message: 'Item succesfully created' };
};

export const getItems = async (type?: string): Promise<ItemInterface[]> => {
  const items: ItemInterface[] = [];

  const result = type
    ? await db
      .collection('items')
      .orderBy('updatedAt', 'desc')
      .where('type', '==', type)
      .get()
    : await db.collection('items').orderBy('updatedAt', 'desc').get();

  result.forEach(item => {
    items.push({
      id: item.id,
      name: item.data().name,
      price: item.data().price,
      details: item.data().details,
      imageUrl: item.data().imageUrl,
      type: item.data().type,
    });
  });

  return items;
};

export const getFilteredByTextItems = async(
  text: string, type: string,
): Promise<ItemInterface[]> => {
  const items: ItemInterface[] = [];
  const result = await
  db.collection('items')
    .where('name', '>=', text)
    .where('name', '<=', `${text}\uf8ff`)
    .where('type', '==', type)
    .get();

  result.forEach(item => {
    items.push({
      id: item.id,
      name: item.data().name,
      price: item.data().price,
      details: item.data().details,
      imageUrl: item.data().imageUrl,
      type: item.data().type,
    });
  });

  return items;
};

export const getItem = async (id: string): Promise<GetItemResponse> => {
  const result = await db
    .collection('items')
    .doc(id)
    .get()
    .then(i => {
      const item = i.data();
      return {
        type: SUCCESS,
        item: {
          id,
          name: String(item!.name),
          price: Number(item!.price),
          details: String(item!.details),
          imageUrl: String(item!.imageUrl),
          type: String(item!.type),
        },
      };
    })
    .catch(err => ({ type: ERROR, message: err.message }));

  if (!result) {
    return { type: ERROR, message: 'Item not found' };
  }

  return result;
};

export const updateItem = async (
  updatedItem: ItemInterface,
  image: File | null,
): Promise<ItemResponse> => {
  const searchResult = await getItem(updatedItem.id);
  if (searchResult.type === ERROR) {
    return searchResult;
  }

  const updatedResult = await db
    .collection('items')
    .doc(updatedItem.id)
    .update({ ...updatedItem, updatedAt: new Date() })
    .catch(err => ({ error: String(err.message) }));

  if (updatedResult) {
    return { type: ERROR, message: updatedResult.error };
  }

  if (image) {
    // upload image
    const storageRef = storage.ref('items').child(updatedItem.id);
    const imageResult = await storageRef
      .put(image)
      .catch(err => ({ error: String(err.code) }));

    if ('error' in imageResult) {
      return { type: ERROR, message: imageResult.error };
    }

    // update item image
    const updateResult = await storageRef
      .getDownloadURL()
      .then(async storagedImage => {
        await db.collection('items').doc(updatedItem.id).update({
          imageUrl: storagedImage,
        });
      })
      .catch(err => ({ error: String(err.code) }));

    if (updateResult) {
      return { type: ERROR, message: 'Could not update image' };
    }
  }

  return { type: SUCCESS, message: 'Item succesfully created' };
};

export const deleteItem = async (id: string): Promise<ItemResponse> => {
  const result = await db
    .collection('items')
    .doc(id)
    .delete()
    .catch(err => ({ type: ERROR, message: String(err.message) }));

  if (result) {
    return result;
  }

  return { type: SUCCESS, message: 'Item succesfully deleted' };
};

export const createAccount = async (
  email: string,
  name: string,
  password: string,
): Promise<AuthResponse> => {
  const result = await auth
    .createUserWithEmailAndPassword(email, password)
    .then(async r => {
      if (r.user === null) {
        return null;
      }

      const { uid } = r.user;

      await db.collection('users').doc(uid).set({ name });
      return {
        type: SUCCESS,
        body: {
          uid,
          name,
          email,
        },
      };
    })
    .catch(err => ({ type: ERROR, message: String(err.message) }));

  if (!result) {
    return { type: ERROR, message: 'Account not created' };
  }

  return result;
};

export const signIn = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const result = await auth
    .signInWithEmailAndPassword(email, password)
    .then(async r => {
      if (r.user === null) {
        return null;
      }

      const { uid } = r.user;

      const user = await db.collection('users').doc(uid).get();
      if (!user) {
        return null;
      }

      return {
        type: SUCCESS,
        body: {
          uid,
          name: user.data.name,
          email,
        },
      };
    })
    .catch(err => ({ type: ERROR, message: String(err.message) }));

  if (!result) {
    return { type: ERROR, message: 'Account not found' };
  }

  return result;
};
