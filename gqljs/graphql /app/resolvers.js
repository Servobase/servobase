/*Import the controllers from the controller directory */

const {firstapi , gqlfirstapi} =  require('../../controller/app');

/*Write all the resolvers logic here */

const queries = {}

const mutations = {
    testmutation: async (_, payload)=>{
      
        const id = payload.id
        const data = await gqlfirstapi(id);
        
        return data;
    },

    
}

 const resolvers = {queries, mutations};

 module.exports = {resolvers};