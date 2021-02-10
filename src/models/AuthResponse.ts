import { Success } from './SuccessType';
import { Error } from './ErrorType';

type AuthResponse =
  | {
      type: Success;
      body: { uid: string; name: string; email: string };
    }
  | { type: Error; message: string };

export default AuthResponse;
