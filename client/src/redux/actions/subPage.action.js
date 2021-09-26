import { OVERVIEW, CLASS, MODULE } from "./actionTypes";

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