const prisma = require("../configs/prisma");

const updateNewsletterController = async (request, response) => {
  const email = request.query.email || request.body.email;

  if (!email) {
    return response.status(400).json({ error: "Email é obrigatório" });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return response.status(404).json({ error: "Usuário não encontrado" });
    }

    await prisma.userInfos.update({
      where: { userId: user.id },
      data: { newsletter: false },
    });

    return response
      .status(200)
      .json({ message: "Você não receberá mais nossos e-mails." });
  } catch (error) {
    return response
      .status(500)
      .json({ error: "Erro ao atualizar preferência de newsletter" });
  }
};

module.exports = updateNewsletterController;
