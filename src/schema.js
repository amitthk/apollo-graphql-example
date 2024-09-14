import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    messages: [Message!]!
  }

  type Message {
    id: ID!
    content: String!
    createdAt: String!
    user: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    messages: [Message!]!
    message(id: ID!): Message
  }

  type Mutation {
    createUser(username: String!, email: String!): User!
    createMessage(userId: ID!, content: String!): Message!
    deleteUser(id: ID!): Boolean!
    deleteMessage(id: ID!): Boolean!
  }
`;

export default typeDefs;