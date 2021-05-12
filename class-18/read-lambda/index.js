'use strict';

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const ContactModel = require('./contacts.schema.js');

exports.handler = async (event) => {
  try {
    // new technique!  the && here is called short circuting
    const id = event.pathParameters && event.pathParameters.id;

    let data;

    if (id) {
      // ContactModel is our DB table
      // .scan traverses the DB table and gets all records
      // .exec allows this to be handed back off to us
      // the below is the same as Mongoose -> .find({})
      const list = await ContactModel.query('id').eq(id).exec();
      data = list[0];
    } else {
      data = await ContactModel.scan().exec();
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
}