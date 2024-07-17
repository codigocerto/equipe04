const { z } = require("zod");

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
  newsletter: z.boolean().default(true),
});

const validateUser = (user) => {
  return userSchema.parse(user);
};

module.exports = {
  validateUser,
};
