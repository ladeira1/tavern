import React, { useState, useLayoutEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ItemForm from '../../components/ItemForm';
import ItemInterface from '../../models/ItemInterface';
import firebase from '../../services/firebase';

const UpdateItem: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<Record<string, string | undefined>>();

  const [item, setItem] = useState<ItemInterface | null>(null);

  const getItem = async () => {
    if (id) {
      const result = await firebase.getItem(id);
      if (result.type === 'ERROR') {
        history.push('/');
        return;
      }
      setItem(result.item);
    }
  };

  useLayoutEffect(() => {
    getItem();
  }, []);
  if (!item) {
    return null;
  }

  if (!item) {
    history.push('/');
    return null;
  }

  return (
    <ItemForm item={item} text="Update this item" buttonText="Update Item" />
  );
};

export default UpdateItem;
