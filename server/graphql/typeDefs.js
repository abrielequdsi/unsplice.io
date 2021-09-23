const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        email: String!
        password: String!
        profile: Profile
        program: [Program]
    }
    type Profile {
        firstName: String!
        lastName: String!
        instagram: String
        github: String
        linkedin: String
        website: String
    }
    type Program {
        id: ID!
        name: String!
        desc: String!
        modules: [Module]
        createdAt: String!
    }
    type Module {
        id: ID!
        name: String!
        desc: String!
        progress: Int!
        content: [Content]
        createdAt: String!
    }
    type Content {
        id: ID!
        number: Number!
        title: String!
        desc: String!
        completed: Boolean!
        videoContent: VideoContent
        textContent: TextContent
        ideContent: IdeContent
        createdAt: String!
    }
    type VideoContent {
        link: String!
    }
    type TextContent {
        text: String!
    }
    type IdeContent {
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
        getUser(email: String!): User
        getProgram(id: ID!): Program
        getModule(id: ID!): Module
    }
    type Mutation {
        login(username: String!, password: String!) : User!
    }
    `;

module.exports = typeDefs;