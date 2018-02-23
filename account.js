const express = require('express');

const app = express.Router();

const init = (connection) => {
  app.get('/', async (req, res) => {
    const [rows] = await connection.execute('select * from users');
    console.log(rows);
    res.render('index');
  });
  app.get('/new-account', (req, res) => {
    res.render('new-account', { error: false });
  });
  app.post('/new-account', async (req, res) => {
    const [rows] = await connection.execute('select * from users where email = ?', [req.body.email]);
    if (rows.length === 0) {
      // insert
      const { name, email, pass } = req.body;
      await connection.execute('insert into users (name, email, pass, role) values (?, ?, ?, ?)', [
        name,
        email,
        pass,
        'user',
      ]);
      res.redirect('/');
    } else {
      res.render('new-account', {
        error: 'Usuário já existente!',
      });
    }
  });
  return app;
};

module.exports = init;
