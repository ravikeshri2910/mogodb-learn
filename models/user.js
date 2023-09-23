// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

const mongodb = require('mongodb');
const { use } = require('../routes/admin');
const getDb = require('../util/database').getDb;

class User {
  constructor(name, email) {
    this.name = name,
    this.email = email
  }

  save() {
    const db = getDb();
  
    return db.collection('users').insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findUserById(userId){
    const db = getDb();
    return db
    .collection('users')
    .findOne({ _id: new mongodb.ObjectId(userId) }) // extract id from mogodb.ObjectId
    // .find({ _id: new mongodb.ObjectId(userId) }) // extract id from mogodb.ObjectId
    // .next()
    .then(user => {
      console.log(user);
      return user;
    })
    .catch(err => {
      console.log(err);
    });
  }


}


module.exports = User;
