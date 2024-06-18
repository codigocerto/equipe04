require('dotenv').config();
const { z } = require('zod')

const envSchema = z.object({
  PORT: z.coerce.number().default(8000),
  
  DATABASE_URL:z.string(),

  EMAILSERVICE: z.string(),
  EMAILHOST: z.string(),
  EMAILPORT: z.coerce.number(),
  EMAILUSER: z.string(),
  EMAILPASS: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  throw new Error("Invalid environment variables!")
}

const env = _env.data;

module.exports = env