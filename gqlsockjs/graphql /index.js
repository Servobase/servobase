const { ApolloServer } = require('@apollo/server');
const { App } =  require('./app');

/*Initializing a graphql server */

async function creategqlserver () {
    const gqlServer = new ApolloServer({
        typeDefs: `
            ${App.typeDefs}
         
            type Query {
                ${App.queries}
               
            }

            type Mutation {
                ${App.mutations}
             
               
            }
        `,
        resolvers: {
          Query: {
            ...App.resolvers.queries,
          
          },
          Mutation: {
            ...App.resolvers.mutations,
            
           
          }
        },
      });
    
      await gqlServer.start();

      return gqlServer;
}

module.exports =  {creategqlserver};
