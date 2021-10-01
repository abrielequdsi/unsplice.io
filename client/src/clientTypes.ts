export interface Token {
  exp: number;
  userInfo: {};
  userPrograms: any[];
}

export interface State {
  user: User;
  subPage: Subpage;
}

export interface User {
  userInfo: [];
  userPrograms: any[];
}

export interface Subpage {
  current: string;
  id: string;
}
