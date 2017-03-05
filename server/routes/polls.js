const PollCtrl = require('../controllers/poll.controller');
const { isLoggedIn } = require('./utils');

module.exports = (app) => {

	app.post('/api/create-poll', isLoggedIn, ({body}, res) => {
		if (!body.name) {
			return res.json({ error: 'name isn\'t supplied' });
		}
		return PollCtrl.createPoll(body.name, body.options)
			.then(document => res.json(document),
			reason => res.json({ error: reason }));
	});

	//vote for poll
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

	//get poll
	app.route('/api/poll/:id')
		.get(({params: {id}}, res) => {
			if (!id) {
				return res.json({ error: 'id isn\'t supplied' });
			}
			return PollCtrl.getPoll(id)
				.then(
				doc => res.json(doc),
				reason => res.json({ error: reason })
				);
		})
		.delete((req, res) => {
			return PollCtrl.deletePoll(req.params.id)
				.then(
				() => res.json({ success: true }),
				reason => res.json({ error: reason })
				);
		});

	//get list of polls
	app.get('/api/polls', (req, res) => {
		return PollCtrl.getListOfPolls()
			.then(
			list => res.json(list),
			reason => res.json({ error: reason })
			)
	});

	//add option to poll
	app.post('/api/poll/:id/add-option/:name', ({params: {id, name}}, res) => {
		if (!id) {
			return res.json({ error: 'id isn\'t supplied' });
		}
		if (!name) {
			return res.json({ error: 'name isn\'t supplied' });
		}
		return PollCtrl.addOption(id, name)
			.then(
			() => res.json({ success: true }),
			reason => res.json({ error: reason.message || reason })
			);
	});

	app.post('/api/poll/:id/change-name/:name', ({params: {id, name}}, res) => {
		if (!id) {
			return res.json({ error: 'id isn\'t supplied' });
		}
		if (!name) {
			return res.json({ error: 'name isn\'t supplied' });
		}
		return PollCtrl.changePollName(id, name)
			.then(
			() => res.json({ success: true }),
			reason => res.json({ error: reason.message || reason })
			);
	});

}