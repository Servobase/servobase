const  express =  require('express');

const router = express.Router()


const {checkhealth}  = require('../controller/test');

router.route('/health').get(checkhealth);

module.exports = router;