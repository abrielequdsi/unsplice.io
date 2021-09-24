const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        institution: String!
        role: String!
        socialLinks: SocialLinks
        program: [Program]
    }
    type SocialLinks {
        instagram: String
        github: String
        linkedin: String
        website: String
    }
    type Program {
        id: ID!
        name: String!
        programCode: String!
        desc: String!
        modules: [Module]
        createdAt: String!
    }
    type Module {
        id: ID!
        name: String!
        moduleCode: String!
        desc: String!
        progress: Int!
        content: [Content]
        createdAt: String!
    }
    type Content {
        id: ID!
        number: Int!
        title: String!
        desc: String!
        completed: Boolean!
        videoContent: VideoContent
        textContent: TextContent
        ideContent: IdeContent
        createdAt: String!
    }
    type VideoContent {
        title: String!
        link: String!
    }
    type TextContent {
        title: String!
        text: String!
    }
    type IdeContent {
        title: String!
        answer: String!
        question: String!
        testCase: [TestCase!]
        solution: String!
    }
    type TestCase {
        input: String!
        output: String!
    }
    type Query {
        getProgram(programCode: String!): Program! 
        getModules: [Module]
        getModule(id: ID!): Module
        getClassmates(programCode: String!): [User] 
        getContent(ID!): Content 
    }
    type Mutation {
        login(email: String!, password: String!): User! 
    }
    `;

module.exports = typeDefs;