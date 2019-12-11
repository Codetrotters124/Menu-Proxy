const db = require('./index.js');

const sample = {
  restName: 'absinthe-brasserie-and-bar',
  images: [
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372549.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372550.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372551.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372552.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372553.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372554.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372555.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/24054224.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/24054226.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/24054227.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/24054228.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/24054229.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/24054230.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/24054232.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/24054233.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/24054234.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/24054235.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25049347.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25231636.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25607915.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720969.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720970.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720971.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720972.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720973.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720974.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720975.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720976.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720977.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720978.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720979.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720980.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720981.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720982.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25720984.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/25730593.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    }
  ]
};

const insertSampleGallery =  ()  => {
  let arr = [sample];
  db.gallery.insert(arr, (err) => {
    if(err){
      console.log('Error: ', err);
    } else {
      db.gallery.disconnect();
      console.log('Sucess: seeding data into db');
    }
  });
};

insertSampleGallery();

