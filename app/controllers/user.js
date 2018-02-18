var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var userModel = require('../models/user');

const user = new userModel("User");



exports.home = function(req, res){

      res.render('index.ejs');

}	
  
exports.login = function(req, res) {
   	  res.render('login.ejs');
}

exports.signup = function(req, res) {
   
		res.render('signup.ejs');

}







