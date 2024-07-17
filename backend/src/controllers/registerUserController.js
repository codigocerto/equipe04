const { validateUser } = require("../validators/userValidator");
const { createUser } = require("../repositories/userRepository");
const mailProvider = require("../mailProvider/mailProvider");
const env = require("../env");

const registerUserController = async (request, response) => {
  try {
    const userData = validateUser(request.body);

    const newUser = await createUser(userData);

    // Aqui envia o email para o usuário
    await mailProvider(
      userData.email,
      "Confirmação de Cadastro",
      `<h1>Seja bem-vindo(a), ${userData.nome} à Código Certo!</h1>`
    );

    // Aqui envia um email, com os dados do usuário cadastrado, para o gestor da Código Certo
    await mailProvider(
      env.EMAILUSER,
      "Novo Cadastro de Usuário",
      `
      <h2>Novo Cadastro de Usuário</h2>
      <p>Nome: ${userData.nome}</p>
      <p>Email: ${userData.email}</p>
      <p>País: ${userData.pais}</p>
      <p>Função Pretendida: ${userData.funcaoPretendida}</p>
      <p>Disponibilidade: ${userData.disponibilidade}</p>
      <p>Senioridade: ${userData.senioridade}</p>
      <p>LinkedIn: ${userData.linkedin}</p>
      <p>Liderar: ${userData.liderar ? "Sim" : "Não"}</p>
      <p>Experiência: ${userData.experiencia}</p>
      <p>Newsletter: ${userData.newsletter ? "Sim" : "Não"}</p>
      `
    );

    return response
      .status(201)
      .json({ message: "Cadastro realizado com sucesso!", newUser });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    return response
      .status(500)
      .json({ error: "Erro interno ao cadastrar usuário." });
  }
};

module.exports = registerUserController;
