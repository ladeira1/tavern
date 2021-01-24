/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';
import 'firebase/storage';

import firebaseConfig from './firebaseConfig';
import ItemInterface from '../models/ItemInterface';
import ItemResponse from '../models/ItemResponse';
import AuthResponse from '../models/AuthResponse';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export default {
  createItem: async (
    name: string,
    details: string,
    price: number,
    type: string,
    image: File,
  ): Promise<ItemResponse> => {
    // check if item does not exist
    const existingItem = await db
      .collection('items')
      .where('name', '==', name)
      .get();

    if (existingItem) {
      return { type: 'ERROR', message: 'Item already exists' };
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
      })
      .catch(err => ({ error: String(err.code) }));

    if ('error' in result) {
      return { type: 'ERROR', message: result.error };
    }

    // get item
    const items: ItemInterface[] = [];
    const itemsResult = await db
      .collection('items')
      .where('name', '==', name)
      .get()
      .catch(err => ({ error: String(err.code) }));

    if ('error' in itemsResult) {
      return { type: 'ERROR', message: itemsResult.error };
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
      return { type: 'ERROR', message: imageResult.error };
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

    return { type: 'SUCCESS', message: 'Item succesfully created' };
  },

  getItems: async (): Promise<ItemInterface[]> => {
    const items: ItemInterface[] = [];
    const result = await db.collection('items').get();

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
  },

  createAccount: async (
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
          type: 'SUCCESS',
          body: {
            uid,
            name,
            email,
          },
        };
      })
      .catch(err => ({ type: 'ERROR', message: String(err.code) }));

    if (!result) {
      return { type: 'ERROR', message: 'Account not created' };
    }
    return result;
  },

  login: async (email: string, password: string): Promise<AuthResponse> => {
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
          type: 'SUCCESS',
          body: {
            uid,
            name: user.data.name,
            email,
          },
        };
      })
      .catch(err => ({ type: 'ERROR', message: String(err.code) }));

    if (!result) {
      return { type: 'ERROR', message: 'Account not found' };
    }

    return result;
  },
};
