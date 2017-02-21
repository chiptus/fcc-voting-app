const PollCtrl = require('../controllers/poll.controller');

module.exports = (app) => {

	app.route('/api/polls')
		.get((req, res) => {
			Poll.find({})
				.exec()
				.then(result => res.json(result))
				.catch(reason => res.send({ error: reason }));
		});

	app.post('/api/create-poll', ({body}, res) => {
		if (!body.name) {
			return res.json({ error: 'name isn\'t supplied' });
		}
		return PollCtrl.createPoll(body.name, body.options)
			.then(document => res.json(document),
			reason => res.json({ error: reason }));
	});

	app.post('/api/poll/:id/vote/:optionId', ({params: {id, optionId }}, res) => {
		if (!id) {
			return res.json({ error: 'id isn\'t supplied' });
		}
		if (!optionId) {
			return res.json({ error: 'option id isn\'t supplied' });
		}
		return PollCtrl.voteForPoll(id, optionId)
			.then(
				() => res.json({ success: true }),
				reason => res.json({ error: reason })
			);
	});

	app.get('/api/poll/:id', ({params: {id}}, res) => {
		if (!id) {
			return res.json({ error: 'id isn\'t supplied' });
		}
		return PollCtrl.getPoll(id)
			.then(
				doc => res.json(doc),
				reason => res.json({ error: reason })
			);
	});

}