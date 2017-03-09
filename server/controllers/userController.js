const User = require('../models/users');

module.exports = {
  saveUser: (name, socialId, socialNetwork) => {
    const social = { [socialNetwork]: socialId };
    return User.findOneAndUpdate({[`social.${socialNetwork}`]: socialId}, { name, social }, { upsert: true, new: true, setDefaultsOnInsert: true })
      .exec();
  }
}