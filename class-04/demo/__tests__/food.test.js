'use strict';

require('@code-fellows/supergoose'); // this pulls in and configures and runs mongo memory server and supertest

const GenericCollection = require('../models/generic-collection.js');
const food = new GenericCollection();

describe('Food Actions', () => {

  it('can create() a new food item', () => {
    let obj = { name: 'test food 1', calories: 9999, type: 'FRUIT' };
    let expected = { name: 'test food 1', calories: 9999, type: 'FRUIT' };

    return food.create(obj)
      .then(record => {
        // in general, review this technique for similar object comparison
        Object.keys(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item])
        })
      });

  });

  // create, then read so that this test is independent from above
  it('can read() a single food item', () => {
    let obj = { name: 'test food 2', calories: 9999, type: 'VEG' };
    let expected = { name: 'test food 2', calories: 9999, type: 'VEG' };
    
    return food.create(obj)
      .then(record => {
        return food.read(record._id)
          .then(item => {
            console.log('this should be test food 2', item);
          })
      })
  });

});