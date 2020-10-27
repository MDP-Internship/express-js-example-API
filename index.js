const app = require('express');


app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})