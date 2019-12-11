const momentRandom = require('moment-random');

const restaurantName = ['A Salt & Battery', 'Party Fowl', 'Thai Me Up Restaurant & Brewery', 'Wild Thyme Café', 'Tequila Mockingbird', 'Life of Pie', 'Sconehenge', 'The Codfather', 'The Notorious P.I.G', 'Pig’N Pancake', 'Backyard Bowls', 'The Little Easy', 'Pies n’ Thighs', 'Pot Au Feu', 'Cibo Matto', 'Siena', 'The Dorrance', 'The French Laundry', 'Dining Divas', 'Kitchen Corral', 'Uzen', 'Crystal Fish', 'Okaine', 'Chicken Things', 'Acapulco Gold', 'Achilles', 'Acorn Palace', 'Affecté', 'Affluential', 'Bleeko', 'Big Juicy', 'Bella Figala', 'Cafe Constant', 'Capricorn', 'Club Soma', 'Classio', 'Crab and Prawn', 'Crustacia', 'Dutch Oven Gretel', 'Eat Underground', 'Escargot', 'Food Frolic', 'Funky Chicken Soup', 'Gelatosphere', 'Godzilla Pizza', 'Homeroom Cafe', 'Hot Sour and Soar', 'Kaku', 'La Zilla', 'Mongoliant Little Sheep', 'Left Blank', 'Lizzie Bordens', 'Mint Dynasty', 'Mongerfish', 'Netplosion', 'New Orlean', 'Nibbles', 'Nob Hill', 'Nosh on the Net', 'Nostrilé', 'Passion Fruit', 'Peace Meal', 'Pastor Pizza', 'Radiant Fresh', 'Kurasabe', 'Raja', 'Rococo', 'Royal Lush', 'Saguaro', 'SeaSky', 'Shitaki', 'Seafood Seranade', 'Scrap Opera', 'Té Tango', 'Tequila Mockingbird', 'Thalia', 'The 4AM Club', 'The Beef Plank', 'The Crawfish Cantina', 'The Crustacean', 'The Potato Constant', 'Torpor Ritz', 'Troché', 'Waffle Stomper', 'Wasabi Fresh', 'Wire House', 'Zen BBQ', 'Zoo Stew', 'Zuke', 'Song Bird', 'Zilladelphia', 'Dinner in the Sky', ' Sur un Arbre Perché', 'Normas', ' Devil Island Prison Restaurant ', 'Ninja Dining', 'Aurum', 'Homewood Mountain Resort', 'Mountain Retreat', 'The Five Fishermen'];

const times = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

const flooredRandomNum = (num) => {
  return Math.floor(Math.random() * num);
};

const restaurants = [];
const randomRestaurantGenerator = () => {
  for (let i = 0; i < 100; i++) {
    let restaurant = {
      name: restaurantName[i],
      minParty: 2,
      maxParty: max = Math.floor(Math.random() * 4) + 7,
      open: '17:00',
      close: '22:30'
    };
    restaurants.push(restaurant);
  }
  return restaurants;
};

const bookings = [];
const randomTableGenerator = () => {
  for (let i = 0; i < 100; i++) {
    let booking = {
      restaurantId: flooredRandomNum(101),
      date: momentRandom('2020-04-05', '2019-12-05').format().substring(0, 10),
      time: times[flooredRandomNum(22)],
      size: Math.floor(Math.random() * 9) + 2
    };
    bookings.push(booking);
  }
  return bookings;
};

// console.log(randomTableGenerator().length);

module.exports = {
  randomRestaurantGenerator,
  randomTableGenerator
};