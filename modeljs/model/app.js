const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*Write the schema of your DB here */

const AppSchema = new Schema ({
    name: {type: String, require: true},
    date: {type : Date, default: Date.now}


})

module.exports = mongoose.model('app', AppSchema);