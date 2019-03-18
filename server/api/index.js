const router = require('express').Router();
const { Product } = require('../db.js');

router.get('/products', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next);
});

router.post('/products', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(next);
});

module.exports = router;
