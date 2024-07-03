import { ApolloServer } from '@apollo/server';
import { App } from './app';

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

export default creategqlserver;
