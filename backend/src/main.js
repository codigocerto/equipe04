const express = require('express');
const api = express();
const env = require('./env')

api.use(express.json())


api.listen(env.PORT, () => console.log(`Back-End running at ${env.PORT}`))