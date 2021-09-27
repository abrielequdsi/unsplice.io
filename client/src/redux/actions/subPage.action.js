import { OVERVIEW, CLASS, MODULE, CONTENT } from "./actionTypes";

export const overviewPage = () => ({
    type: OVERVIEW
})

export const classPage = () => ({
    type: CLASS
})

export const modulePage = (moduleId) => ({
    type: MODULE,
    payload: moduleId
})

export const contentPage = (contentId) => ({
    type: CONTENT,
    payload: contentId
})