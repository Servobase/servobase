import { Request, Response } from "express"

// follow the below pattern for creating controllers for a particular  endpoint

const firstapi = (req:Request,res:Response)=>{

    try {

        //Write down the api logic here 

       res.json({message: "this is  first api"})

      
        
    } catch (error) {

       return res.json(error)
    }
}

const gqlfirstapi = (id:string)=>{

    try {

        //Write down the gql api logic here 

       

       return  `this is  first api ${id}`;
        
    } catch (error) {

       return error;
    }
}



module.exports = {firstapi , gqlfirstapi}; //export all the controllers declared above 