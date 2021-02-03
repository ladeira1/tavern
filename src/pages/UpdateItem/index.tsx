import React, { useState, useLayoutEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ItemForm from '../../components/ItemForm';
import ItemInterface from '../../models/ItemInterface';
import { getItem } from '../../services/firebase';

const UpdateItem: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<Record<string, string | undefined>>();

  const [item, setItem] = useState<ItemInterface | null>(null);

  const getDatabaseItem = async () => {
    if (id) {
      const result = await getItem(id);
      if (result.type === 'ERROR') {
        history.push('/');
        return;
      }
      setItem(result.item);
    }
  };

  useLayoutEffect(() => {
    getDatabaseItem();
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
