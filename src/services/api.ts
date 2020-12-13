import axios from 'axios';
import apiConfig from './apiConfig';

import Item from '../models/Item';

const api = axios.create(apiConfig);

export default {
  getItems: async (): Promise<Item[] | null> => {
    const result = await api
      .get('/item')
      .then(response => response.data)
      .catch(() => null);

    return result;
  },
};
