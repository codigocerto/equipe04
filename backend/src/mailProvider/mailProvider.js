const env = require('../env')
const nodemailer = require('nodemailer')

function mailProvider(emailTo, subject, message) {
  let mailOptions = {
    from: env.EMAILUSER,
    to: emailTo,
    subject: subject,
    html: message,
  };

  const transporter = nodemailer.createTransport({
    service: env.EMAILSERVICE,
    host: env.EMAILHOST,
    port: env.EMAILPORT,
    secure: false,
    auth: {
      user: env.EMAILUSER,
      pass: env.EMAILPASS
    }
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return error;
    } else {
      console.log('enviado')
      return "E-mail enviado com sucesso!";
    }
  });
}

module.exports = mailProvider