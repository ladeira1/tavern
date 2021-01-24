/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';
import 'firebase/storage';

import firebaseConfig from './firebaseConfig';
import ItemInterface from '../models/ItemInterface';
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
  ): Promise<void> => {
    // create item
    await db.collection('items').add({
      name,
      details,
      price,
      imageUrl: '',
      type,
    });

    // get item
    const items: ItemInterface[] = [];
    const result = await db.collection('items').where('name', '==', name).get();
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

    // upload image
    const storageRef = storage.ref('items').child(items[0].id);
    await storageRef.put(image);

    // update item image
    await storageRef.getDownloadURL().then(async storagedImage => {
      items.forEach(async item => {
        await db.collection('items').doc(item.id).update({
          imageUrl: storagedImage,
        });
      });
    });
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
