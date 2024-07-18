const { z } = require("zod");
const prisma = require("../configs/prisma");
const mailProvider = require("../mailProvider/mailProvider");

const sendMailController = async (request, response) => {

  try {
    const userSchema = z.object({
      nome: z.string().min(3),
      email: z.string().email(),
      pais: z.string(),
      funcaoPretendida: z.string(),
      disponibilidade: z.string(),
      senioridade: z.string(),
      linkedin: z.string(),
      liderar: z.boolean(),
      experiencia: z.number().optional()
    });

    const user = userSchema.parse(request.body);

    const userValidation = await prisma.users.findUnique({
      where: { email: user.email }
    });

    if (userValidation) {
      return response.status(400).json({ error: "Email já cadastrado" });
    }

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
        experiencia: user.experiencia
      },
    });

    await mailProvider(user.email, "teste", `<h1>teste</h1>`);

    return response.status(201).send();
  } catch (error) {
    console.error("Erro em sendMailController:", error);
    return response.status(500).json({ error: "Erro ao processar requisição" });
  }
};

module.exports = sendMailController;
