export interface InitialState {
  userInfo: userInfo | null;
  userPrograms: any[] ;
}


export interface Token {
  exp: number;
  userInfo: userInfo;
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

export interface Module {
  name: string;
  id: string | number;
  desc : string ,
  moduleCode: string | number  ,
  progress: any,
}
