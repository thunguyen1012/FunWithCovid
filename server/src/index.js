require('dotenv').config();

const http = require('http');
const cors = require('cors');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const StatisticAPIs = require('./statisticAPIs');

const dataSources = () => ({
  statisticAPIs: new StatisticAPIs(),
});

const app = express();
app.use(cors());

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 4000;
httpServer.listen({ port }, () => {
  console.log(`🚀 app running at http://localhost:${port}/graphql`);
});
