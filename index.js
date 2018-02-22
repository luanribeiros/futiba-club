const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

const init = async () => {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'futibaclub',
  });
  console.log(connection);
};

init();

app.listen(3000, (err) => {
  if (err) {
    console.log('Não foi possível iniciar');
  }
  console.log('Servidor rodando ...');
});
