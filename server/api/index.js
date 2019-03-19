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

router.delete('/products/:id', (req, res, next) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
