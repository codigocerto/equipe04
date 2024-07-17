const mailProvider = require("../mailProvider/mailProvider");

const sendWelcomeEmail = (email, name) => {
  const subject = "Bem-vindo";
  const message = `<h1>Olá, ${name}!</h1><p>Bem-vindo à Código Certo!</p>`;
  mailProvider(email, subject, message);
};

module.exports = {
  sendWelcomeEmail,
};
