'use strict';

const foodSchema = require('./food-schema.js');

class GenericCollection {
  constructor() {
    this.model = foodSchema;
  }

  create(record) { // we can CREATE a new record using the mongoose .save() method
    let newRecord = new this.model(record);
    return newRecord.save();
  }

  read(_id) {
    if (_id) {
      return this.model.findOne({ _id });
    } else {
      return this.model.find({});
    }
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true }) // new: true just makes sure that mongoose returns the new updated object, not the old one
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = GenericCollection;