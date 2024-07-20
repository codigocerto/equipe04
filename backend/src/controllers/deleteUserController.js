const prisma = require("../configs/prisma");

const deleteUserController = async (request, response) => {
  const { email } = request.query;

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

    await prisma.userInfos.deleteMany({
      where: { userId: user.id },
    });

    await prisma.users.delete({
      where: { email },
    });

    return response
      .status(200)
      .json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    return response.status(500).json({ error: "Erro ao deletar usuário" });
  }
};

module.exports = deleteUserController;
