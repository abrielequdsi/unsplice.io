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
  userInfo: userInfo;
  userPrograms: any[];
}

export interface userInfo {
  picture: string | undefined;
  firstName: string,
  lastName: string,
  role: string,
}

export interface Subpage {
  current: string;
  id: string;
}
