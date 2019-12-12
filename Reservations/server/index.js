const express = require('express');
// const db = require('../database/index.js');

//middleware
const bodyParser = require('body-parser');

//Router
const router = require('./routes.js');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('client/dist'));
app.use(router);

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
