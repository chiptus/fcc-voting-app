'use strict';
const pollsRoutes = require('./polls');

var path = process.cwd();
var ClickHandler = require(path + '/controllers/clickHandler.server.js');

module.exports = function (app, passport) {


	var clickHandler = new ClickHandler();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/react-site/build/index.html');
		});

	// route to test if the user is logged in or not
	app.get('/loggedin',
		function (req, res) {
			res.send(req.isAuthenticated() ? req.user : '0');
		});

	// route to log in 
	app.post('/login',
		passport.authenticate('local'),
		function (req, res) {
			res.send(req.user);
		});

	// route to log out
	app.post('/logout',
		function (req, res) {
			req.logOut();
			res.send(200);
		});


	// app.route('/login')
	// 	.get(function (req, res) {
	// 		res.sendFile(path + '/public/login.html');
	// 	});

	// app.route('/logout')
	// 	.get(function (req, res) {
	// 		req.logout();
	// 		res.redirect('/login');
	// 	});

	// app.route('/profile')
	// 	.get(isLoggedIn, function (req, res) {
	// 		res.sendFile(path + '/public/profile.html');
	// 	});

	// // app.route('/api/:id')
	// // 	.get(isLoggedIn, function (req, res) {
	// // 		res.json(req.user.github);
	// // 	});

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

	pollsRoutes(app);

};
