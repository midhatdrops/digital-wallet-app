const express = require('express');
module.exports = function (app) {
  //Definir URL base para todas as rotas
  const router = express.Router();
  app.use('/api', router);

  //Mapeamento de Rotas

  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
};
