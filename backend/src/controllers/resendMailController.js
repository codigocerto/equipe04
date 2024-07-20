const prisma = require("../configs/prisma");
const mailProvider = require("../mailProvider/mailProvider");

const resendMailController = async (request, response) => {
  const { email } = request.query;

  if (!email) {
    return response.status(400).json({ error: "Email não informado" });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return response.status(404).json({ error: "Email não encontrado" });
    }

    mailProvider(user.email, "Reenvio de Email", `<h1>Reenvio de Email</h1>`);

    response.status(200).json({ message: "Email reenviado com sucesso" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Erro ao reenviar email" });
  }
};

module.exports = resendMailController;
