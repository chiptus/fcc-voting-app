const User = require('../models/users');

module.exports = {
  saveUser: (name, socialId, socialNetwork) => {
    const social = { [socialNetwork]: socialId };
    User.findOneAndUpdate({ social }, { name, social }, { upsert: true, new: true, setDefaultsOnInsert: true })
      .exec();
  }
}