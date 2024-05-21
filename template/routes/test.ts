import express from "express";

const router = express.Router();

//@ts-ignore
import {checkhealth} from '../controller/test'

router.route('/health').get(checkhealth);

module.exports = router;