const prisma = require("../configs/prisma");

const createUser = async (userData) => {
  return await prisma.user.create({
    data: {
      nome: userData.nome,
      email: userData.email,
      pais: userData.pais,
      funcaoPretendida: userData.funcaoPretendida,
      disponibilidade: userData.disponibilidade,
      senioridade: userData.senioridade,
      linkedin: userData.linkedin,
      liderar: userData.liderar,
      experiencia: userData.experiencia,
      newsletter: true,
    },
  });
};

module.exports = {
  createUser,
};
