import ItemInterface from './ItemInterface';
import { Success } from './SuccessType';
import { Error } from './ErrorType';

type GetItemResponse =
  | {
      type: Success;
      item: ItemInterface;
    }
  | { type: Error; message: string };

export default GetItemResponse;
