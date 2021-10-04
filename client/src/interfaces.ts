export interface User {
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
}

export interface MyToken {
  name: string;
  exp: number;
  userInfo: null;
  userPrograms: any;
}

export interface Module {
  name: string;
  moduleCode: string;
  desc: string;
  progress: number;
}
