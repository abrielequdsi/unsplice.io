export interface Token {
  exp: number;
  userInfo: {};
  userPrograms: [];
}

export interface State {
  user: User;
  subPage: Subpage;
}

export interface User {
  userInfo: [];
  userPrograms: [];
}

export interface Subpage {
  current: string;
  id: string;
}
