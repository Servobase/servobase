const  express =  require('express');

const router = express.Router();


const {firstapi} = require('../controller/app')//import controllers from controller directory

// follow below pattern for creating the routes 
router.route('/first').get(firstapi);   //use it by declaring a specific route for it, using different http methods.


module.exports = router; // exporting router