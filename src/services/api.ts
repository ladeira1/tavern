import axios from 'axios';
import apiConfig from './apiConfig';

import ItemInterface from '../models/ItemInterface';

const api = axios.create(apiConfig);

export default {
  getItems: async (): Promise<ItemInterface[] | null> => {
    const result = await api
      .get('/item')
      .then(response => response.data)
      .catch(() => null);

    return result;
  },
};
