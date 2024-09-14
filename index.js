import express from 'express';
import { ApolloServer } from 'apollo-server';
import typeDefs  from './src/schema.js';
import resolvers from './src/resolvers.js';
import sequelize  from 'sequelize';
import { User, Message } from './src/models.js';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { sequelize }
});

server.listen({ port: 8000 }).then(({ url }) => {
  console.log(`Apollo Server on ${url}`);
});
