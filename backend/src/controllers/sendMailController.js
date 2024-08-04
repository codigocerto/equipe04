const { z } = require("zod");
const prisma = require("../configs/prisma");
const mailProvider = require("../mailProvider/mailProvider");
const sendAdminNotification = require("./sendAdminNotification");
const emailTemplateMentor = require("../emailTemplates/emailTemplateMentor");
const emailTemplateVoluntario = require("../emailTemplates/emailTemplateVoluntario");

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
      tipo: z.boolean(),
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
      data: { nome: user.nome, email: user.email.toLowerCase(), telefone: user.telefone },
    });

    await prisma.userInfos.create({
      data: {
        userId: id,
        pais: user.pais,
        funcaoPretendida: user.funcaoPretendida,
        disponibilidade: user.disponibilidade,
        linkedin: user.linkedin,
        liderar: user.liderar,
        mentor: user.tipo,
        experiencia: user.experiencia || "Nenhuma informada",
      },
    });

    let emailSubject, emailBody;
    if (user.tipo) {
      emailSubject = "Confirmação de Cadastro como Mentor";
      emailBody = emailTemplateMentor(user);
    } else {
      emailSubject = "Confirmação de Cadastro como Voluntário";
      emailBody = emailTemplateVoluntario(user);
    }

    await mailProvider(user.email.toLowerCase(), emailSubject, emailBody);

    await sendAdminNotification(user, user.tipo);

    return response.status(201).json({ message: "Cadastro enviado com sucesso" });
  } catch (error) {
    console.error("Erro em sendMailController:", error);
    return response.status(500).json({ error: "Erro ao processar requisição" });
  }
};

module.exports = sendMailController;
