const express = require('express');
const app = express();
const port = 3002;
const path = require('path');
const bodyParser = require('body-parser');
const menu = require('../database/database.js');
const axios = require('axios');

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/menu/:id', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }))

// May not need below
// app.use(bodyParser.json())

app.get('/api/menu/:id', (req, res) => {
  menu.find({_id: req.params.id})
  .then((data) => {
    res.status(200).send(data[0]);
  })
  .catch((err) => {
    res.status(400).send(err);
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));

