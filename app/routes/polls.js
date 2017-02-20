const Poll = require('../models/poll');

module.exports = (app) => {

	app.route('/api/polls')
		.get((req, res) => {
			Poll.find({})
        .exec()
        .then(result => res.json(result))
        .catch(reason => res.send({error: reason}));
		})
}