const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { z } = require("zod");
const env = require("../env");
const mailProvider = require("../mailProvider/mailProvider");

const sendMailController = async (request, response) => {
  const userSchema = z.object({
    nome: z.string().min(3),
    email: z.string().email(),
    pais: z.string(),
    funcaoPretendida: z.string(),
    disponibilidade: z.string(),
    senioridade: z.string(),
    linkedin: z.string(),
    liderar: z.boolean(),
    experiencia: z.number().optional(),
    newsletter: z.boolean(),
  });

  const user = userSchema.parse(request.body);

  const userValidation = await prisma.users.findUnique({
    where: { email: user.email }
  });

  if (userValidation) {
    return response.status(400).json({ error: "Email já cadastrado" });
  }

  try {
    const { id } = await prisma.users.create({
      data: { nome: user.nome, email: user.email },
    });

    await prisma.userInfos.create({
      data: {
        userId: id,
        pais: user.pais,
        funcaoPretendida: user.funcaoPretendida,
        disponibilidade: user.disponibilidade,
        senioridade: user.senioridade,
        linkedin: user.linkedin,
        liderar: user.liderar,
        experiencia: user.experiencia,
        newsletter: user.newsletter,
      },
    });

    const cancelLink = `http://localhost:${env.PORT}/update-newsletter?email=${user.email}`;

    const message = `<h1>Cadastro realizado com sucesso</h1>
                     <p>Para cancelar a assinatura da newsletter, clique no link abaixo:</p>
                     <a href="${cancelLink}">Cancelar Newsletter</a>`;

    mailProvider(user.email, "Bem-vindo!", message);

    const adminMessage = `
      <h1>Novo usuário cadastrado!</h1>
      <p>Nome: ${user.nome}</p>
      <p>Email: ${user.email}</p>
      <p>País: ${user.pais}</p>
      <p>Função Pretendida: ${user.funcaoPretendida}</p>
      <p>Disponibilidade: ${user.disponibilidade}</p>
      <p>Senioridade: ${user.senioridade}</p>
      <p>LinkedIn: ${user.linkedin}</p>
      <p>Liderar: ${user.liderar ? "Sim" : "Não"}</p>
      <p>Experiência: ${user.experiencia || 0}</p>
      <p>Newsletter: ${user.newsletter ? "Sim" : "Não"}</p>
    `;

    mailProvider(env.EMAILUSER, "Novo usuário cadastrado", adminMessage);

    return response.status(201).send();
  } catch (error) {
    if (error.code === "P2002") {
      return response.status(400).json({ error: "Usuário já cadastrado" });
    }
    return response.status(500).json({ error: "Erro ao criar usuário" });
  }
};

module.exports = sendMailController;
