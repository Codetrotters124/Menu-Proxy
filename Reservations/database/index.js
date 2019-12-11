const Sequelize = require('sequelize');

const sequelize = new Sequelize('reservations', 'root', '', {
  dialect: 'mysql'
});

const Restaurant = sequelize.define('restaurant', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  minParty: Sequelize.INTEGER,
  maxParty: Sequelize.INTEGER,
  open: Sequelize.TIME,
  close: Sequelize.TIME
});

const Table = sequelize.define('table', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  restaurantId: {
    type: Sequelize.INTEGER,
  },
  date: Sequelize.DATEONLY,
  time: Sequelize.TIME,
  size: Sequelize.INTEGER
});

module.exports = {
  sequelize,
  Restaurant,
  Table
};
