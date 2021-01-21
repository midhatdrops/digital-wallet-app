const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'put', 'delete', 'post']);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route('get', (req, res, next) => {
  BillingCycle.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json({ errors: [error] });
    }
  });
});

module.exports = BillingCycle;
