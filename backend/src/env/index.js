require('dotenv').config();
const { z } = require('zod')

const envSchema = z.object({
  PORT: z.coerce.number().default(8000)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  throw new Error("Invalid environment variables!")
}

const env = _env.data;

module.exports = env