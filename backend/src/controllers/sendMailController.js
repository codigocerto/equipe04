const {
  getUsersSubscribedToNewsletter,
} = require("../repositories/newsletterRepository");
const mailProvider = require("../mailProvider/mailProvider");

const sendMailController = async (request, response) => {
  try {
    const { subject, message } = request.body;

    const users = await getUsersSubscribedToNewsletter();

    await Promise.all(
      users.map(async (user) => {
        await mailProvider(user.email, subject, message);
      })
    );

    return response
      .status(200)
      .json({
        message:
          "Email enviado para todos os usuários inscritos na newsletter.",
      });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return response
      .status(500)
      .json({ error: "Erro interno ao enviar email." });
  }
};

module.exports = sendMailController;
