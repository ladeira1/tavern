export interface UserInterface {
  uid: string;
  name: string;
  email: string;
}

export interface AuthInterface {
  isLogged: boolean;
  user: UserInterface | null;
  register: (
    email: string,
    name: string,
    password: string,
    passwordConfirmation: string,
  ) => Promise<AuthReturnInterface>;
  login: (email: string, password: string) => Promise<AuthReturnInterface>;
  logout: () => void;
}

export interface AuthReturnInterface {
  result: 'SUCCESS' | 'ERROR';
  message?: string;
}
