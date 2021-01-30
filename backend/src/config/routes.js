const express = require('express');
const auth = require('./auth');

module.exports = function (app) {
  /* Rotas protegidas por JWT */
  const protectedAPI = express.Router();
  app.use('/api', protectedAPI);

  protectedAPI.use(auth);

  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(protectedAPI, '/billingCycles');

  /* Rotas abertas */

  const openAPI = express.Router();
  app.use('/oapi', openAPI);

  const AuthService = require('../api/user/authService');
  openAPI.post('/login', AuthService.login);
  openAPI.post('/signup', AuthService.signup);
  openAPI.post('/validateToken', AuthService.validateToken);
};
