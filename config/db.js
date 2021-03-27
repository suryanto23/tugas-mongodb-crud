const {MONGODB_LIVE} = require('./environment');
const mongoose = require('mongoose')

mongoose.connect(MONGODB_LIVE , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbConfigMongo = mongoose.connection;
module.exports = dbConfigMongo;