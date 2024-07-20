const { z } = require("zod");
const prisma = require("../configs/prisma");
const mailProvider = require("../mailProvider/mailProvider");

const resendMailController = async (request, response) => {
    if (!request.body) {
        return response.status(400).json({ error: 'Email não informado' });
    }
    
    const emailSchema = z.object({
        email: z.string().email()
    });
    
    try{
        const { email } = emailSchema.parse(request.body);

        const user = await prisma.users.findUnique({
            where: { email: email }
        });

        if (!user) {
            return response.status(400).json({ error: 'Email não encontrado' });
        }
        
        mailProvider(email, "Reenvio de Email", `<h1>Reenvio de Email</h1>`);

        response.status(200).json({ message: 'Email reenviado com sucesso' });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ error: 'Erro ao reenviar email' });
    }
};

module.exports = resendMailController;
