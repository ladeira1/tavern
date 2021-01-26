import Position from './Position';

type SUCCESS = 'SUCCESS';
type ERROR = 'ERROR';

export const success: SUCCESS = 'SUCCESS';
export const error: ERROR = 'ERROR';

// interface PositionResponse {
//   type: string;
//   body?: Position;
//   message?: string;
// }

type PositionResponse =
  | { type: SUCCESS; body: Position }
  | { type: ERROR; message: string };

export default PositionResponse;
