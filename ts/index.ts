import express, {Request ,Response} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';


//import all the routes  declared in the routes directory.

//@ts-ignore
import healthroute from './routes/test'
//@ts-ignore
import apiroute from './routes/app'



async function init (){

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

//entry point

app.get('/', (req:Request,res:Response)=>{
    try {
        
        res.json({message: "Welcome To ServoBase , Server is running !"})
    } catch (error) {
        res.json(error)
    }
})



//use the routes that are imported above

app.use('/test', healthroute);
app.use('/api', apiroute);



app.listen(8080, ()=>{

    //app will start running on port 8080, you can change the port according to your need .

    console.log("server started")
})

}

init();