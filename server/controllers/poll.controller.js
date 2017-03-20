const Poll = require('../models/poll');
const User = require('../models/users');
var { Schema: { Types: { ObjectId } } } = require('mongoose');

module.exports = {
  createPoll,
  voteForPoll,
  getPoll,
  getListOfPolls,
  getListOfPollsForUser,
  deletePoll,
  addOption,
  changePollName,
};

function unique(array) {
  return Array.from(new Set(array));
}

function createPoll(name, options = [], author, userId) {
  const poll = new Poll({
    name,
    options: unique(options).map(name => ({ name })),
    author,
  });
  return poll.save().then(() =>
    User.findByIdAndUpdate(userId, {
      $push: {
        polls: poll,
      },
    })
      .exec()
      .then(result => ({ userId: userId, poll })));
}

function getPoll(id) {
  return Poll.findById(id).exec();
}

function voteForPoll(id, optionId) {
  return Poll.findOneAndUpdate(
    { _id: id, 'options._id': optionId },
    {
      $inc: {
        'options.$.value': 1,
      },
    }
  ).exec();
}

//todo add pagination
function getListOfPolls() {
  return Poll.find({}, { __v: 0 }).exec();
}

function getListOfPollsForUser(userId) {
  return Poll.find({ created_by_user_id: userId }, { name: 1, _id: 1 }).exec();
}

function deletePoll(pollId) {
  return Poll.remove({ _id: pollId }).exec();
}

function addOption(pollId, optionName) {
  if (!optionName) {
    return Promise.reject('Missing option name');
  }
  if (!pollId) {
    return Promise.reject('Missing poll id');
  }
  const option = {
    name: optionName,
    // _id: new ObjectId(),
  };
  return Poll.findByIdAndUpdate(
    pollId,
    {
      $push: {
        options: option,
      },
    },
    { new: true }
  );
  // }).then(() => option);
}

function changePollName(pollId, newName) {
  return Poll.findByIdAndUpdate(pollId, {
    name: newName,
  });
}

/*
  * create poll - with or without options

    initial options will always have 0 value
  
  * get list of existing polls
  * get list of existing polls - for user


  * get poll

  * vote for poll

  * change poll's name

  * add option to poll (create new option and add it to poll)


  * delete poll


  
  * share poll - have a unique uri for each poll /username/pollid
      to be implemented on client side


*/
