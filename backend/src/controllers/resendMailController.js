const prisma = require("../configs/prisma");
const emailTemplateMentor = require("../emailTemplates/emailTemplateMentor");
const emailTemplateVoluntario = require("../emailTemplates/emailTemplateVoluntario");
const mailProvider = require("../mailProvider/mailProvider");

const resendMailController = async (request, response) => {
  const { email } = request.query;

  if (!email) {
    return response.status(400).json({ error: "Email não informado" });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { email },
      include: {
        UserInfos: true,
      },
    });

    if (!user) {
      return response.status(404).json({ error: "Email não encontrado" });
    }

    let emailSubject, emailBody;
    if (user.UserInfos && user.UserInfos.mentor) {
      emailSubject = "Confirmação de Cadastro como Mentor";
      emailBody = emailTemplateMentor(user);
    } else {
      emailSubject = "Confirmação de Cadastro como Voluntário";
      emailBody = emailTemplateVoluntario(user);
    }

    await mailProvider(user.email, emailSubject, emailBody);

    response.status(200).json({ message: "Email reenviado com sucesso" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Erro ao reenviar email" });
  }
};

module.exports = resendMailController;
