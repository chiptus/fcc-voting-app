'use strict';
const pollsRoutes = require('./polls');
const {
	validateWithFacebook,
	createJwt,
} = require('../auth');
const { saveUser } = require('../controllers/userController');

var path = process.cwd();

module.exports = function (app, passport) {


	// var clickHandler = new ClickHandler();

	// app.route('/')
	// 	.get(function (req, res) {
	// 		res.sendFile(path + '/public/react-site/build/index.html');
	// 	});

	// route to test if the user is logged in or not
	app.get('/loggedin',
		function (req, res) {
			res.send(req.isAuthenticated() ? req.user : '0');
		});

	// route to log in 
	// app.post('/login',
	// 	passport.authenticate('local'),
	// 	function (req, res) {
	// 		res.send(req.user);
	// 	});

	// // route to log out
	// app.post('/logout',
	// 	function (req, res) {
	// 		req.logOut();
	// 		res.send(200);
	// 	});

	app.post('/auth/facebook', ({ body: { socialToken } }, res, next) => {
		validateWithFacebook(socialToken)
			.then(user => {
				return Promise.all([
					saveUser(user.name, user.id, 'facebook', socialToken),
					user
				])
			})
			.then(([{ _id }, user]) => ({
				token: createJwt({
					dbId: _id,
					socialId: user.id,
					name: user.name,
				}, 'CLIENT-APP'),
				user: {
					name: user.name,
					id: _id,
				}
			}))
			.then(response => {
				res.json(response);
			})
			.catch(err => {
				res.sendStatus(403);
				next(new Error(err));
			})
	})

	// app.route('/auth/github')
	// 	.get(passport.authenticate('github'));

	// app.route('/auth/github/callback')
	// 	.get(passport.authenticate('github', {
	// 		successRedirect: '/',
	// 		failureRedirect: '/login'
	// 	}));

	pollsRoutes(app);

};
