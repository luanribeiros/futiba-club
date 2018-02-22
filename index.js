import { express } from 'express';
import { session } from 'express-session';

const app = express();

app.use(session({
  secret: 'FullStack Academy',
  saveUninitialized: true,
  resave: true,
}));

app.get('/', (req, res) => {
  res.send('Olá FullStack Academy');
});

app.listen(3000, (err) => {
  if (err) {
    console.log('Não foi possível iniciar');
  }
  console.log('Servidor rodando ...');
});
