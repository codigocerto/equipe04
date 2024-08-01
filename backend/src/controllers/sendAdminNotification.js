const env = require("../env");
const mailProvider = require("../mailProvider/mailProvider");

const sendAdminNotification = async (user) => {
  const adminEmailSubject = "Novo Cadastro de Usuário";
  const adminEmailMessage = `
    <h1>Novo cadastro de usuário</h1>
    <p>Nome: ${user.nome}</p>
    <p>Email: ${user.email}</p>
    <p>Telefone: ${user.telefone}</p>
    <p>País: ${user.pais}</p>
    <p>Função Pretendida: ${user.funcaoPretendida}</p>
    <p>Disponibilidade: ${user.disponibilidade}</p>
    <p>LinkedIn: ${user.linkedin}</p>
    <p>Tipo de Usuário: ${user.tipo === "mentor" ? "Mentor" : "Voluntário"}</p>
    <p>Liderança: ${user.liderar ? "Sim" : "Não"}</p>
    <p>Experiência: ${user.experiencia || "Nenhuma informada"}</p>
  `;

  await mailProvider(env.EMAILUSER, adminEmailSubject, adminEmailMessage);
};

module.exports = sendAdminNotification;
