const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL, { logging: false });

const Product = conn.define('product', {
  name: Sequelize.STRING,
  price: Sequelize.DECIMAL,
});

const syncAndSeed = () => {
  return conn
    .sync({ force: true })
    .then(() => {
      return Promise.all([
        Product.create({
          name: 'Foo',
          price: '5.99',
        }),
        Product.create({
          name: 'Bar',
          price: '4.99',
        }),
        Product.create({
          name: 'Bazz',
          price: '6.49',
        }),
      ]);
    })
    .then(() => console.log('connection synced'));
};

module.exports = { conn, Product, syncAndSeed };
