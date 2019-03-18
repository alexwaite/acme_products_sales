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
      Product.create({
        name: 'Foo',
        price: '5.99',
      });
    })
    .then(() => console.log('connection synced'));
};

module.exports = { conn, Product, syncAndSeed };
