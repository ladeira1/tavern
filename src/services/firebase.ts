import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/storage';

import firebaseConfig from './firebaseConfig';
import ItemInterface from '../models/ItemInterface';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();

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
};
