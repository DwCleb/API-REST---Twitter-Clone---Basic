const app = require('express')();
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const dbConfig = require('./config/database');

mongoose.connect(dbConfig.url);
requireDir(dbConfig.modelsPath);

const User = mongoose.model('User');
User.create({
  name: 'Cleber Dias Ferreira Júnior',
  username: 'dwcleb',
  email: 'dwcleb@gmail.com',
  password: 'programmer',
}, () => {
  console.log('user created');
});
app.listen(3000);
