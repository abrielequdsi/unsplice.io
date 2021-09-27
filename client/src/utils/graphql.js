import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login(
    $email: String!
    $password: String!
  ) {
    login( email: $email, password: $password ) {
        #Get User Info
        userInfo {
            id
            firstName
            lastName
            institution
            socialLinks {
                github
                instagram
                linkedin
                website
            }
            programCodes
        }
        #Get User Program
        userPrograms {
            id
            name
            programCode
        }

        token
        
    }
  }
`;


export const GET_MODULE_LIST = gql`
  query ModuleList($programId: ID!) {
    getModuleList(programId: $programId) {
        id
        name
        moduleCode
        desc
        progress
    }
  }
`

export const GET_MODULE = gql`
  query Module($moduleId: ID!) {
    getModule(moduleId: $moduleId) {
        id
        name
        desc
        progress
        contents {
          id
          number
          title
          desc
          completed
        }
    }
  }
`

export const GET_CLASSMATES = gql`
  query ModuleList($programCode: String!) {
    getClassmates(programCode: $programCode) {
    id
    firstName
    lastName
    institution

    socialLinks {
      github
      instagram
      linkedin
      website
    }

    programCodes
  }
  }
`

export const GET_CONTENT = gql`
  query Content($moduleId: ID!, $contentId: ID!) {
    getContent(moduleId: $moduleId, contentId: $contentId) {
        id
        number
        title
        desc
        completed
        notionContent {
          title
          link
        }
        ideContent {
          title
          answer
          question
          testCase {
            input
            output
          }
          solution
        }
    }
  }
`