require('dotenv').config();
const { Sequelize , Op} = require('sequelize');
const Boilerplate = require('./models/boilerplate.js');

let arrayFiles = require('node:fs').readdirSync('./src/models/')
let arrayConst = arrayFiles.map(a=>a.split('.')[0]); 
console.log({arrayFiles, arrayConst})
let global = {}
arrayConst.map((ac,i) => global[ac] = require(`./models/${arrayFiles[i]}`))
console.log({global})

const fs = require('fs');
const path = require('path');
const { PassThrough } = require('stream');
const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

// console.log(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/spoondiets`);
let DB = DB_USER === 'postgres' ? 'list' : DB_USER ;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialect: 'sqlite',    
  storage: 'database.sqlite'
});

Object.keys(global).map((g,i) => typeof global[g] === 'function' && global[g](sequelize))

const { 
  // category, subcategory, notation, visit, /*notation_visit,*/ cat_subcat, user, team, image
  boilerplate, categories
} = sequelize.models; 

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  Op
};
