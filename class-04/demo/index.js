'use strict';

const mongoose = require('mongoose'); // pulls mongoose in
// const Food = require('./models/food-schema.js'); // pulls in our food schema (aka model, aka blueprint for our data)
const GenericCollection = require('./models/generic-collection.js');
const food = new GenericCollection();

const MONGODB_URI = 'mongodb://localhost:27017/food'; // setting up a connecting "string" for connecting us to MongoDB

const options = { useNewUrlParser: true, useUnifiedTopology: true } // don't read into this, just add them

// this connects us to the "food" database
mongoose.connect(MONGODB_URI, options);

const databaseInteractions = async () => {

  let pizza = {
    name: 'pizza',
    calories: 1200,
    type: 'VEG'
  }

  let apple = {
    name: 'apple',
    calories: 30,
    type: 'FRUIT'
  }

  let newFood = await food.create(pizza);
  let moreFood = await food.create(apple);

  console.log('create:', newFood);

  let oneFood = await food.read(newFood._id);
  console.log('get one food item', oneFood);

  let allFoods = await food.read();
  console.log(allFoods);
}

databaseInteractions();