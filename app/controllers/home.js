var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var userModel = require('../models/user');

const user = new userModel("User");

exports.loggedIn = function(req, res, next)
{
	if (req.session.user) { // req.session.passport._id

		next();

	} else {

		res.redirect('/login');

	}

}

exports.list = function(req, res) {

	user.setname("Lanz Bocado Ruiz");

    //res.send('You sent the name "' + req.body.username + '".');
    console.log(`You called the model name ${user.getname()}`);
    console.log('You sent the name "' + req.body.username + '".');
    res.redirect('/login');


}

exports.home = function(req, res) {
	
	
	res.render('home.ejs', {
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,
	
	 });
	 
}


exports.signup = function(req, res) {

	
		res.render('signup.ejs');

}


exports.login = function(req, res) {


	
	if (req.session.user) {

		res.redirect('/home');

	} else {

		res.render('login', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});

	}
	
}


    
