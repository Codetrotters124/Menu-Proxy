const config = require('../config.js');
const axios = require('axios');

//File is not being used at the momment
//Used for doing API request
let getRequests3 = (url, cb) => {
  let options = {
    method: 'GET',
    url: url,
    headers: {
      'User-Agent': 'request',
      'Authorization': `AWS ${config.ID}`
    }
  };

  axios(options)
    .then((res) => {
      cb(null, res.data);
    }).catch((err) => {
      cb(err);
    });
}

module.exports.getRequests3 = getRequests3;