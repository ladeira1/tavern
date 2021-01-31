import ItemInterface from './ItemInterface';

type SUCCESS = 'SUCCESS';
type ERROR = 'ERROR';

export const success: SUCCESS = 'SUCCESS';
export const error: ERROR = 'ERROR';

type GetItemResponse =
  | {
      type: SUCCESS;
      item: ItemInterface;
    }
  | { type: ERROR; message: string };

export default GetItemResponse;
