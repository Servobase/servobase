

// follow the below pattern for creating controllers for a particular  endpoint

const firstapi = (req,res)=>{

    try {

        //Write down the api logic here 

        res.json({message: "this is  first api"})
        
    } catch (error) {
        res.json(error)
    }
}



module.exports = {firstapi}; //export all the controllers declared above 