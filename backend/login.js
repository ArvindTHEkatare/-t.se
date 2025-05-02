const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


const user = {
  username: 'admin',
  password: '1234'
};

app.use(express.static('public'));
app.use(express.json());


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    res.json({ message: 'Inloggning lyckades!' });
  } else {
    res.status(401).json({ message: 'Fel användarnamn eller lösenord' });
  }
});

app.listen(PORT, () => console.log(`Servern körs på http://localhost:${PORT}`));
