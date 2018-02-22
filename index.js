const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();

const account = require('./account');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extend: true }));
app.set('view engine', 'ejs');

const init = async () => {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'futibaclub',
  });

  app.use(account(connection));

  app.listen(3000, (err) => {
    if (err) {
      console.log('Não foi possível iniciar');
    }
    console.log('Servidor rodando ...');
  });
};

init();
