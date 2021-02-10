import Position from './Position';
import { Success } from './SuccessType';
import { Error } from './ErrorType';

type PositionResponse =
  | { type: Success; body: Position }
  | { type: Error; message: string };

export default PositionResponse;
