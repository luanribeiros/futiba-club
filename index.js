import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Olá FullStack Academy');
});

app.listen(3000, (err) => {
  if (err) {
    console.log('Não foi possível iniciar');
  }
  console.log('Servidor rodando ...');
});
