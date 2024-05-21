const  express =  require('express');
const cors =  require('cors');
const morgan =  require('morgan');

//import all the routes  declared in the routes directory.

const healthroute = require('./routes/test.js')

const apiroute =  require('./routes/app.js')



const app = express();

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



app.listen(8080, ()=>{

    //app will start running on port 8080, you can change the port according to your need .

    console.log("server started")
})