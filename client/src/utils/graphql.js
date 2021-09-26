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
        userProgram {
            id
            name
            programCode
        }
        
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
