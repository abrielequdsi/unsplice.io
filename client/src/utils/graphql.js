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
            role
            picture
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

// MUTATION
export const REGISTER_STUDENT = gql`
  mutation Register(
    $email: String!
    $password: String!
    $confirmPassword: String!
    $firstName: String!
    $lastName: String!
    $institution: String
    $role: String!
    $picture: String
    $instagram: String
    $github: String
    $linkedin: String
    $website: String
    $programCode: String!
  ) {
    createUser(
      registerInput: {
        email: $email, 
        password: $password ,
        confirmPassword: $confirmPassword,
        firstName: $firstName,
        lastName: $lastName,
        institution: $institution,
        role: $role,
        picture: $picture,
        socialLinks: {
          instagram: $instagram,
          github: $github,
          linkedin: $linkedin,
          website: $website,
        }
        programCode: $programCode
      }
      ) 
      {
        #Get User Info
        email
        
    }
  }
`;