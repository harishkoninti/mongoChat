const mongo = require('mongodb').MongoClient;
// const client = require('socket.io').listen(4000).sockets;

var io = require('socket.io-client')
var socket = io.connect('http://localhost:8080', {reconnect: true});



//connecting mongo

mongo.connect('mongodb://127.0.0.1/mongochat',function(err,db){
    if(err){
        throw err;
    }
    console.log('MongoDB connected .....');
});