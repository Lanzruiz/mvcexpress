//var MongoClient = require('mongodb').MongoClient;
//var MongoClient = require('mongodb').MongoClient;

var MongoClient = require('../../lib/mongodb')
var database = require('../../config/database')


const mongo = new MongoClient();

var collection;

class User {

 

 getall(res) {

  	 mongo.connect = function(res, 'Users'){
  	 	 collection : 'Users'
  	 }
  }

}

module.exports = User;






