const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/bundle.js', (req, res) => {
  // axios.get('http://localhost:3001/bundle.js')
  // .then((data) => {
  //   res.status(200).send(data.data);
  // })
  // .catch((err) => {
  //   res.status(400).send();
  // })
})

app.listen(port, () => { console.log(`Listening from port ${port}`)});