const express = require('express');
const api = express();
const env = require('./env')


api.get('/teste', (req, res) => {
  return res.json({Message: "hello"})
})

api.listen(env.PORT, () => console.log(`Back-End running at ${env.PORT}`))