const express = require('express');
const api = express();
const env = require('./env')

const sendMailController  = require('./controllers/sendMail')
const resendMailController = require('./controllers/resendMail')
const cancelNewsletterController = require('./controllers/cancelNewsletter')

api.use(express.json())
api.post('/send-mail', sendMailController)
api.post('/resend-mail', resendMailController)
api.post('/cancel-newsletter/:userId', cancelNewsletterController);

api.listen(env.PORT, () => console.log(`Back-End running at ${env.PORT}`))