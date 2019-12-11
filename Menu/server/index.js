const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const menu = require('../database/database.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }))
// May not need below
// app.use(bodyParser.json())
app.get('/menu', (req, res) => {
  menu.find({_id: 1})
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(400).send(err);
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));

