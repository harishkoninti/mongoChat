const mongo = require('mongodb').MongoClient;
const server = require('socket.io');
const io = new server(4000);
// server.listen(4000);

//connecting mongo

mongo.connect('mongodb:127.0.0.1/mongochat',function(err,db){
    if(err){
        throw err;
    }
    console.log('MongoDB connected .....');
});