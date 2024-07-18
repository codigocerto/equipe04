const { z } = require("zod");
const prisma = require("../configs/prisma");

const cancelNewsletterController = async (request, response) => {

    const { userId } = request.params;

    if (!userId) {
        return response.status(400).send('User ID is required.');
    }
    
    try {
        await prisma.userInfos.update({
            where: { userId: Number(userId) },
            data: { newsletter: false },
        });

        response.send('Sua newsletter foi cancelada.');
    } catch (error) {
        console.error('Erro cancelando inscrição:', error);
        response.status(500).send('Falha ao cancelar a inscrição.');
    }
};

module.exports = cancelNewsletterController;
