const { z } = require("zod");
const prisma = require("../configs/prisma");
const mailProvider = require("../mailProvider/mailProvider");
const sendAdminNotification = require("./sendAdminNotification");

const sendMailController = async (request, response) => {
  try {
    const userSchema = z.object({
      nome: z.string().min(3),
      email: z.string().email(),
      telefone: z.string(),
      pais: z.string(),
      funcaoPretendida: z.string(),
      disponibilidade: z.string(),
      linkedin: z.string(),
      liderar: z.boolean().optional(),
      tipo: z.enum(["voluntario", "mentor"]),
      experiencia: z.string().optional(),
    });

    const user = userSchema.parse(request.body);

    const userValidation = await prisma.users.findUnique({
      where: { email: user.email },
    });

    const userTelefoneValidation = await prisma.users.findUnique({
      where: { telefone: user.telefone },
    });

    if (userValidation) {
      return response.status(400).json({ error: "Email já cadastrado" });
    }

    if (userTelefoneValidation) {
      return response.status(400).json({ error: "Telefone já cadastrado" });
    }

    const { id } = await prisma.users.create({
      data: { nome: user.nome, email: user.email, telefone: user.telefone },
    });

    await prisma.userInfos.create({
      data: {
        userId: id,
        pais: user.pais,
        funcaoPretendida: user.funcaoPretendida,
        disponibilidade: user.disponibilidade,
        linkedin: user.linkedin,
        liderar: user.tipo === "voluntario" ? user.liderar || false : false,
        mentor: user.tipo === "mentor",
        experiencia: user.experiencia || "Nenhuma informada",
      },
    });

    let emailSubject, emailBody;
    if (user.tipo === "mentor") {
      emailSubject = "Confirmação de Cadastro como Mentor";
      emailBody = `
        <h1>Olá, ${user.nome}</h1>
        <p>Aqui irá o conteúdo do email específico para o mentor.</p>
      `;
    } else {
      emailSubject = "Confirmação de Cadastro como Voluntário";
      emailBody = `
        <h1>Olá, ${user.nome}</h1>
        <p>Aqui irá o conteúdo do email específico para o voluntário.</p>
      `;
    }
    //a rota de cadastro é a mesma para ambos os tipos
    //no form do mentor tem que incluir ( <input type="hidden" name="tipo" value="mentor"> )
    //no form do voluntário tem que incluir ( <input type="hidden" name="tipo" value="voluntario"> )

    await mailProvider(user.email, emailSubject, emailBody);

    await sendAdminNotification(user);

    return response.status(201).send();
  } catch (error) {
    console.error("Erro em sendMailController:", error);
    return response.status(500).json({ error: "Erro ao processar requisição" });
  }
};

module.exports = sendMailController;
