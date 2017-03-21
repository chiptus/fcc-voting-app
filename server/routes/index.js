'use strict';

const express = require('express');
const path = require('path');
const pollsRoutes = require('./polls');
const {
  validateWithFacebook,
  createJwt,
  isReqLoggedIn,
} = require('../auth');
const { saveUser } = require('../controllers/userController');

module.exports = function(app) {
  app.use('/', express.static(path.join(__dirname, '../../client-web/build/')));

  // route to test if the user is logged in or not
  app.get('/loggedin', isReqLoggedIn, function(req, res) {
    res.json({ loggedIn: !!req.profile });
  });

  app.post('/auth/facebook', ({ body: { socialToken } }, res, next) => {
    validateWithFacebook(socialToken)
      .then(user => {
        return Promise.all([
          saveUser(user.name, user.id, 'facebook', socialToken),
          user,
        ]);
      })
      .then(([{ _id, polls }, user]) => ({
        token: createJwt(
          {
            dbId: _id,
            socialId: user.id,
            name: user.name,
          },
          'CLIENT-APP'
        ),
        user: {
          name: user.name,
          _id,
          polls,
        },
      }))
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.sendStatus(403);
        next(new Error(err));
      });
  });

  pollsRoutes(app);

  // Always return the main index.html, so react-router render the route in the client
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client-web', 'build', 'index.html')
    );
  });
};
