import { OVERVIEW, CLASS, MODULE, CONTENT } from './actionTypes';

export const overviewPage = () => ({
  type: OVERVIEW,
});

export const classPage = () => ({
  type: CLASS,
});

export const modulePage = (moduleId: string) => ({
  type: MODULE,
  payload: moduleId,
});

export const contentPage = (data: { moduleId: string; contentId: string }) => ({
  type: CONTENT,
  payload: data,
});
