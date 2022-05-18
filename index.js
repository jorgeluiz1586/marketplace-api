const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
  res.send('Hello Word!');
});

app.get('/login', (req, res) => {
  res.send('Login');
});

app.listen(82, () => {
  console.log('Servidor ligado');
});
