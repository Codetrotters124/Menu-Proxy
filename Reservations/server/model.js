const db = require('../database/index');

const bookings = {
  get: callback => {
    let query = 'SELECT tables.*, restaurants.name FROM tables, restaurants WHERE restaurants.id = tables.restaurantId;';
    db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT}).then(tables => {
      callback(null, tables);
    }).catch(err => {
      callback(err, null);
    });
  },
  post: callback => {

  }
};

module.exports = {bookings};
