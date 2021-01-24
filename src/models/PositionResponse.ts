import Position from './Position';

interface PositionResponse {
  type: string;
  body?: Position;
  message?: string;
}

export default PositionResponse;
