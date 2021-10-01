import { OVERVIEW, CLASS, MODULE, CONTENT } from './actionTypes';

export const overviewPage = () => ({
  type: OVERVIEW,
});

export const classPage = () => ({
  type: CLASS,
});

export const modulePage = (moduleId: any) => ({
  type: MODULE,
  payload: moduleId,
});

export const contentPage = (contentId: any) => ({
  type: CONTENT,
  payload: contentId,
});
