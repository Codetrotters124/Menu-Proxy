const model = require('./model');

const bookings = {
  get: (req, res) => {
    model.bookings.get((err, data) => {
      if (err) {
        res.status(400).send('sorry');
      } else {
        res.status(200).send(data);
      }
    });
  },
  post: (req, res) => {

  }
};

module.exports = {bookings};