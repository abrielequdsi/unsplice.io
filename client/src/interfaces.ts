export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  institution: string;
  picture: string;
  socialLinks: {
    github: string;
    instagram: string;
    linkedin: string;
    website: string;
  };
  userPrograms: Program[];
  userInfo: any;
}

export interface State {
  user: User;
  userInfo: any;
  subPage: any;
}

export interface MyToken {
  name: string;
  exp: number;
  userInfo: null;
  userPrograms: any;
}

export interface Program {
  id: string;
  name: string;
  programCode: string;
  desc: string;
}

export interface Module {
  id: string;
  name: string;
  moduleCode: string;
  desc: string;
  progress: number;
}

export interface Content {
  id: string;
  number: number;
  title: string;
  desc: string;
  completed: boolean;
  notionContent: string;
  createdAt: string;
}
