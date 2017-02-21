const Poll = require('../models/poll');

module.exports = {
  createPoll,
  voteForPoll,
  getPoll,
}

function unique(array) {
  return Array.from(new Set(array));
}

function createPoll(name, options = []) {
  return Poll.create({
    name,
    options: unique(options).map(name => ({ name })),
  })
}

function getPoll(id) {
  return Poll.findById(id)
    .exec()
}

function voteForPoll(id, optionId) {
  return Poll.findOneAndUpdate({_id: id, 'options._id': optionId}, {$inc: {
    'options.$.value' : 1,
  }})
    .exec();
}

/*
  * create poll - with or without options
  * add option to poll (create new option and add it to poll)

    initial options will always have 0 value
  
  * get poll

  * vote for poll

  * get list of existing polls

  * delete poll


  
  * share poll - have a unique uri for each poll /username/pollid



*/