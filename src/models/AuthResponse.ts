type SUCCESS = 'SUCCESS';
type ERROR = 'ERROR';

export const success: SUCCESS = 'SUCCESS';
export const error: ERROR = 'ERROR';

type AuthResponse =
  | {
      type: SUCCESS;
      body: { uid: string; name: string; email: string };
    }
  | { type: ERROR; message: string };

export default AuthResponse;
