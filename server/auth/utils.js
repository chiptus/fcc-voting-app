const request = require('request');
const jwt = require('jsonwebtoken');

module.exports = {
  validateWithProvider,
  createJwt,
  isReqLoggedIn,
};

function isReqLoggedIn(req, res, next) {
  // console.warn("auth is not implemented");
  // return next();
  let profile;
  try {
    profile = req.query.jwt && verifyJwt(req.query.jwt);
  } catch (e) {
    return res.status(403).json(e);
  }
  if (profile) {
    req.profile = profile;
    return next();
  } else {
    res.sendStatus(403);
  }
}

const providers = {
  facebook: {
    url: 'https://graph.facebook.com/me',
  },
};

function validateWithProvider(network, socialToken) {
  return new Promise(function(resolve, reject) {
    // Send a GET request to Facebook with the token as query string
    request(
      {
        url: providers[network].url,
        qs: { access_token: socialToken },
      },
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(JSON.parse(body));
        } else {
          reject(err);
        }
      }
    );
  });
}

//TODO get from config
const PRIVATE_KEY = 'MY_PRIVATE_KEY';

function createJwt(profile, issuer) {
  return jwt.sign(profile, PRIVATE_KEY, {
    expiresIn: '2h',
    issuer,
  });
}

function verifyJwt(jwtString, issuer) {
  return jwt.verify(jwtString, PRIVATE_KEY, {
    issuer,
  });
}
