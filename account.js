const express = require('express');

const app = express.Router();

const init = (connection) => {
  app.get('/', async (req, res) => {
    const [rows] = await connection.execute('select * from users');
    console.log(rows);
    res.render('index');
  });
  app.get('/new-account', (req, res) => {
    res.render('new-account');
  });
  return app;
};

module.exports = init;
