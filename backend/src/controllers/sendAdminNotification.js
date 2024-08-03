const emailTemplateAdmin = require("../emailTemplates/emailTemplateAdmin");
const env = require("../env");
const mailProvider = require("../mailProvider/mailProvider");

const sendAdminNotification = async (user) => {
  const adminEmailSubject = "Novo Cadastro de Usuário";
  const adminEmailMessage = emailTemplateAdmin(user);

  await mailProvider(env.EMAILUSER, adminEmailSubject, adminEmailMessage);
};

module.exports = sendAdminNotification;
