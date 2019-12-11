const router = require('express').Router();
const controller = require('./controller');

router.get('/api/reservations', controller.bookings.get
);

module.exports = router;