import express, {Request ,Response} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

/********** */ 


import { expressMiddleware } from "@apollo/server/express4";
import creategqlserver from './graphql';

/********** */ 

/********** */ 


import {Server as SocketServer} from 'socket.io';
import http from 'http';

/********** */


//import all the routes  declared in the routes directory.

//@ts-ignore
import healthroute from './routes/test'
//@ts-ignore
import apiroute from './routes/app'



async function init (){

     /* Uncomment the below code to connect mongodb database */

   /* 
   
   main().catch(err => console.log(err));

    async function main() {
    await mongoose.connect(`Paste your Mongodb Atlas URL here`);
    console.log("Database Connected");
  }

  */

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


/********** */ 
// Initializing websockets 

const server = http.createServer(app);
const io = new SocketServer({
    
    //@ts-ignore
    cors: '*'
})


io.attach(server);

io.on('connection', (socket)=>{

    socket.on('connection', ()=>{
        console.log('socket connected' , socket.id);

    })

})

/********** */ 



/********** */ 
// Initializing Graphql

app.use("/graphql", expressMiddleware(await creategqlserver()));

/********** */ 


//use the routes that are imported above

app.use('/test', healthroute);
app.use('/api', apiroute);



server.listen(8080, ()=>{

    //app will start running on port 8080, you can change the port according to your need .

    console.log("server started")
})

}

init();