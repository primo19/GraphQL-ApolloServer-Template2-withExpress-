import { gql } from 'apollo-server-express';

export const typeDefs = gql`

type Query {
    helloWorld: String!
    dogs: [Dog]!
}

type Dog {
    _id: ID!
    name: String!
}

type Mutation {
    addDog(name: String!): Dog!
}
`;