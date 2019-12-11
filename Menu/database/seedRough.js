const Menu = require('./database.js');
const faker = require('faker');


////// FAKE DATA. CODE STARTS AT LINE 30

const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Dessert', 'Main', 'Drinks'];
const alcohol = ['Hennessy', 'Jack Daniels', 'Ciroc', 'Grey Goose', 'Belvedere', 'Sky Vodka', 'Jameson', 'Patron', 'Don Julio', 'Hendricks'];

const drinks = ['Shot', 'and Coke', 'and Cranberry', 'and Tonic', 'Double Shot', 'and Sprite', 'and Ginger Ale', 'and Pineapple', 'and Fresh Lemonade', 'and Soda'];

const flavors = ['Cherry', 'Strawberry','Chocolate','Mango','Vanilla','Dark Chocolate','Oreo'];
const dessert = ['Pie', 'Ice Cream', 'Cake', 'Cheesecake', 'Bread', 'Brownies', 'Cookies', 'Smoothie'];

const mainCourse = ['Beef', 'Pork', 'Chicken', 'Lobster', 'Crab', 'Salmon','Lamb', 'Shrimp', 'Steak','Sausage', 'Carrot', 'Celery', 'Onion', 'Green Pepper', 'Potato', 'Eggplant', 'Garlic','Mushroom','Broccoli', 'Impossible'];
const dishes = ['Pie', 'Salad', 'Burger', 'Ravioli', 'Sandwich', 'and Rice', 'Burrito', 'Basket','Linguine','and Noodles'];

const breakfast = ['Omelette', 'Bagel', 'Waffles', 'Pancakes', 'Sandwich', 'and Rice', 'with Eggs and Toast', 'Burrito', 'Biscuits and Gravy', 'Hash Browns'];

const division = [['Starters','Main Course'],['Apps', 'Entrees'],['Starters','Entrees'],['Apps', 'Main Course'], ['Main'], ['Combos'], ['Apps', 'Combos'], ['Starters', 'Combos']];

const eaDish = ['Oysters', 'Egg Rolls', 'Stuffed Bagels', 'Fried Avocados','Spring Rolls'];
const subDish = [['each'],['ea'], ['small','medium','large'], ['small', 'large']];



/////////////////// CODE STARTS HERE ////////////////

//Randomizer
let randomInt = (min, max) => {return (Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min))}

//Determine % of something
let chance = (probability) => {return (randomInt(0,100) < probability)}

//Price of Items
let priceDrink = () => randomInt(8, 14);
let priceBreakfast = () => randomInt(10, 18);
let priceMeal = () => randomInt(12, 30);
let infoProb = () => chance(70);

// Item Generator
let comboMaker = (menu, item1, item2, itemPrice, prob) => {
  let name = `${item1[randomInt(0, item1.length)]} ${item2[randomInt(0, item2.length)]}`;
  if (menu[`${name}`]) {
    // do something if exists
    return;
  } else {
    menu[`${name}`] = {price: itemPrice}
    if (prob) {
      menu[`${name}`].description = faker.lorem.words();
    }
  }
}

// Second Item Generator

let subComboMaker = (menu, itemPrice, prob) => {
  let name = `${eaDish[randomInt(0, eaDish.length)]}`;
  if (menu[`${name}`]) {
    // do something if exists
    return;
  } else {
    menu[`${name}`] = {description: faker.lorem.words()};
    var subItem = subDish[randomInt(0,subDish.length)];
    subItem.forEach((value) => {
      menu[`${name}`][`${value}`] = {price: randomInt(4,18)}
    })
  }
}

//Iterate through items (separated these for cleanliness, may clean up later)

let buildBreakfast = (menu, itemsToAdd) => {
  for (var i=0; i<itemsToAdd; i++) {
    comboMaker(menu, mainCourse, breakfast, priceBreakfast(), infoProb());
  }
};

let buildDrinks = (menu, itemsToAdd) => {
  for (var i=0; i<itemsToAdd; i++) {
    comboMaker(menu, alcohol, drinks, priceDrink(), infoProb());
  }
};

let buildDessert = (menu, itemsToAdd) => {
  for (var i=0; i<itemsToAdd; i++) {
    comboMaker(menu, flavors, dessert, priceDrink(), infoProb());
  }
};


let buildMeal = (menu, itemsToAdd) => {
  for (var i=0; i<itemsToAdd; i++) {
    if (chance(30)) {
      subComboMaker(menu);
    } else {
      comboMaker(menu, mainCourse, dishes, priceMeal(), infoProb());
    }
  }
};

// Create Menu

let buildMenu = (menu) => {
  let menuNo = randomInt(0, meals.length);
  for (let j=0; j<menuNo; j++) {
    let menuType = meals[randomInt(0, meals.length)];
    if (!menu[`${menuType}`]) {
      // 50% chance to have a description
      menu[`${menuType}`] = {};
      if (chance(50)) {
        menu[`${menuType}`].description = faker.lorem.sentence();
      }
    } else {
      j--;
    }
  }
  return menu;
}

//Potentially Add

let buildDivision = (menu) => {
  let div = division[randomInt(0,division.length)];
  div.forEach((value) => {
    menu[`${value}`] = {};
    //
    if (chance(50)) {
      menu[`${value}`].description = faker.lorem.words();
    }
    subMenu = menu[`${value}`];
    buildMeal(subMenu, Math.floor(itemNos/div.length));
  })
}


for (let i=0; i<1; i++) {
  //create New Menus
  let newMenu = {};
  buildMenu(newMenu);

  //Build Menu
  for (let menu in newMenu) {
    let currentMenu = newMenu[menu];

    //around 30% of menu's have descriptions
    // if (chance(30)) {
    //   currentMenu.description = faker.lorem.sentence()
    // }
    let itemNos = randomInt(8, 16);

    // Build items Based on Type of Menu
    if (menu === 'Drinks') {
      buildDrinks(currentMenu, itemNos);
    } else if (menu === 'Dessert') {
      buildDessert(currentMenu, itemNos);
    } else if (menu === 'Breakfast') {
      buildBreakfast(currentMenu, itemNos);
    } else if (menu === 'Lunch'  || menu === 'Dinner' || menu === 'Snacks' || menu === 'Main') {
      let div = division[randomInt(0,division.length)];
      for (var k=0; k<div.length; k++) {
        currentMenu[`${div[k]}`] = {};
        if (chance(50)) {
          currentMenu[`${div[k]}`].description = faker.lorem.words();
        }
        subMenu = currentMenu[`${div[k]}`];
        buildMeal(subMenu, Math.floor(itemNos/div.length));
      }
    }
  }
  // console.log('newMenu is ', newMenu);

  let newItem = new Menu(newMenu);
  newItem.save();
}
