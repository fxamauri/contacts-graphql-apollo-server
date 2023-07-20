const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const contactService = require('./src/services/contactService')
const server = new ApolloServer({
  ...graphql,
  context: {
    contactService,
  }
});

server.listen().then(({ url }) => console.log(url));
