const { buildSchema } = require('graphql');

const schema = `
    type TestData {
        text: String!
        views: Int!
    }

    type Team {
        _id: ID!
        location: String!
        Name: String!
    }

    type User {
        _id: ID!
        firstname: String!
        lastname: String!
    }

    type RootQuery {
        hello: TestData!
    }

    input UserInputData {
        firstname: String!
        lastname: String!
        position: String!
    }

    type RootMutation {
        createEntity(userInput: UserInputData): User!
    } 

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`;

module.exports = buildSchema(schema);