const jwt = require('jsonwebtoken');
const env = require('../.env');

// Middleware de validação de token

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  } else {
    const token =
      req.body.token || req.query.token || req.headers['authorization'];
    if (!token) {
      return res.status(403).send({ erros: ['No token provided'] });
    }
    jwt.verify(token, env.authSecret, function (err, decoded) {
      if (err) {
        return res
          .status(403)
          .send({ erros: ['Failed to authenticate Token'] });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};
