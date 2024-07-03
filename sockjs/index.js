const  express =  require('express');
const cors =  require('cors');
const morgan =  require('morgan');
const mongoose = require('mongoose');


/********** */ 


const {Server:SocketServer} = require('socket.io')
const http = require('http');

/********** */ 


//import all the routes  declared in the routes directory.

const healthroute = require('./routes/test.js')

const apiroute =  require('./routes/app.js')

/* */


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



// Initializing websocket connection

    const server = http.createServer(app);

    const io = new SocketServer({
   
        cors: '*'
    })

    
    io.attach(server);

    io.on('connection', (socket)=>{
   
        socket.on('connection', ()=>{
            console.log('socket connected' , socket.id);

        })

    })

/********** */ 

    app.use(express.json());
    app.use(cors());
    app.use(morgan('tiny'));

//entry point

app.get('/', (req,res)=>{
    try {
        
        res.json({message: "Welcome To ServoBase , Server is running !"})
    } catch (error) {
        res.json(error)
    }
})



//use the routes that are imported above

app.use('/test', healthroute);
app.use('/api', apiroute);



server.listen(8080, ()=>{

    //app will start running on port 8080, you can change the port according to your need .

    console.log("server started")
})
}

init();