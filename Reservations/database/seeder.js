const db = require('./index.js');
const dummy = require('./dummy.js');

db.sequelize.query('DROP DATABASE IF EXISTS reservations')
  .then(() => db.sequelize.query('CREATE DATABASE reservations;'))
  .then(() => db.sequelize.query('USE reservations;'))
  .then(() => db.sequelize.sync())
  .then(() => {
    let restaurants = dummy.randomRestaurantGenerator();
    for (let i = 0; i < restaurants.length; i++) {
      db.Restaurant.create(restaurants[i]);
    }
  })
  .then(() => {
    let tables = dummy.randomTableGenerator();
    for (let i = 0; i < tables.length; i++) {
      db.Table.create(tables[i]);
    }
  })
  .then(() => console.log('Seed data completed'))
  .catch((error) => console.log('Error creating tables', error));