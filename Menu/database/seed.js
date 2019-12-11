const Menu = require('./database.js');
const faker = require('faker');

//Menu Headers
const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Dessert', 'Main', 'Drinks', 'Appetizers', 'Vegetarian'];
//Randomizer
let randomInt = (min, max) => {return (Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min))}
//Bool given probability
let chance = (probability) => {return (randomInt(0,100) < probability)}

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

let createFoodItems = (menu, itemNos) => {
  for (let k=0; k<itemNos; k++) {
    let food = faker.lorem.words();
    //chance for standard food item
    if (chance(90)) {
      menu[`${food}`] = {price: randomInt(8, 20)};
      // chance to have a description on food item
      if (chance(70)) {
        menu[`${food}`].description = faker.lorem.sentence();
      }
    } else {
      //chance for subdivided food item
      let subDivs = randomInt(1,3);
      menu[`${food}`] = {description: faker.lorem.sentence()};
      for (let k=0; k<subDivs; k++) {
        var sub = faker.lorem.words();
        menu[`${food}`][`${sub}`] = {price: randomInt(8, 20)};
      }
    }
  }
}

for (let i=0; i<100; i++) {
  //create New Menus
  let newMenu = {};
  buildMenu(newMenu);

  //Create Menu Items
  for (let menu in newMenu) {
    let currentMenu = newMenu[menu];
    //Determine No. of Sections within Menu
    let sectionAmt = randomInt(4, 8);
    //For each Menu Section
    for (var j=0; j<sectionAmt; j++) {
      let section = faker.lorem.words();

      currentMenu[`${section}`] = {}
      //chance to have a description in menu section
      if (chance(50)) {
        currentMenu[`${section}`].description = faker.lorem.sentence();
      }
    }
    for (let sections in currentMenu) {
      if (sections === 'description') {
        continue;
      }
      createFoodItems(currentMenu[sections], randomInt(6, 12));
    }
  }
  let newItem = new Menu(newMenu);
  newItem.save();
}
