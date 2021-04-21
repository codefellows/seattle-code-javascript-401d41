'use strict';

class ThingsModel {
  constructor() {
    this.id = 0;
    this.db = []; // this represents an "in-memory" database
  }

  create(obj) {
    // save the new object to the "db" here
    let record = {
      id: ++this.id,
      record: obj
    }
    
    this.db.push(record);
    return record;
  }


  read(id) {
    // grab an item from the "db", given it's id
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  update(id, obj) {
    // update an item in the "db" with a new item
    // PLACEHOLDER
    if (id) {
      return obj;
    }
  }

  delete(id) {
    // find an item in the "db" via it's id, and delete
    // PLACEHOLDER
    if (id) {
      return null;
    }
  }
}

module.exports = ThingsModel;