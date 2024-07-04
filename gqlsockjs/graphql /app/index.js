const {mutations} = require('./mutations');
const {queries} = require('./queries');
const {resolvers} = require('./resolvers');
const {typeDefs} = require('./typedefs');

const App = {mutations ,queries , resolvers , typeDefs};

module.exports = {App};