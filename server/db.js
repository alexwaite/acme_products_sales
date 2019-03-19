const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL, { logging: false });

const Product = conn.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  price: Sequelize.DECIMAL(10, 2),
  availability: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['In Stock', 'Backordered', 'Discontinued']],
    },
  },
  discountPercent: {
    type: Sequelize.INTEGER,
    validate: {
      max: 99,
      min: 0,
    },
  },
});

const syncAndSeed = () => {
  return conn
    .sync({ force: true })
    .then(() => {
      return Promise.all([
        Product.create({
          name: 'Foo',
          price: '5.99',
          availability: 'In Stock',
          discountPercent: 0,
        }),
        Product.create({
          name: 'Bar',
          price: '4.99',
          availability: 'Backordered',
          discountPercent: 10,
        }),
        Product.create({
          name: 'Bazz',
          price: '6.49',
          availability: 'Discontinued',
          discountPercent: 0,
        }),
      ]);
    })
    .then(() => console.log('connection synced'));
};

module.exports = { conn, Product, syncAndSeed };
