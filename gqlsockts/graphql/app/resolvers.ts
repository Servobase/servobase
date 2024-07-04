/*Import the controllers from the controller directory */
//@ts-ignore
import {gqlfirstapi} from '../../controller/app'

/*Write all the resolvers logic here */

const queries = {}

const mutations = {
    testmutation: async (_:any, payload: String)=>{
        //@ts-ignore
        const id = payload.id
        const data = await gqlfirstapi(id);
        
        return data;
    },

    
}

export const resolvers = {queries, mutations};