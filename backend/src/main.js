const express = require('express');
const api = express();
const env = require('./env')

const sendMailController  = require('./controllers/sendMail')

api.use(express.json())
api.post('/send-mail', sendMailController)

api.listen(env.PORT, () => console.log(`Back-End running at ${env.PORT}`))