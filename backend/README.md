# API - Envio Emails


## Como rodar
### Configurando .env

Definição de qual porta irá rodar
```
PORT=3000
```

Definindo o banco de dados:

Url para o banco
```
DATABASE_URL="file:./dev.db"
```
Caso deseje usar outro banco apenas colocar a string de conexão e alterar no arquivo ./prisma/schema.prisma o provider para o banco desejado.
```
datasource db {
  provider = "SEU BANCO AQUI"
  url      = env("DATABASE_URL")
}
```

Configurando o Email para envio:

```
EMAILSERVICE= nome do serviço de email
EMAILHOST= host do provedor de email
EMAILPORT= 587

EMAILUSER= Seu email
EMAILPASS=
```
Para gerar o email pass pelo gmail seguir esses passos: [link](https://support.google.com/accounts/answer/185833?hl=pt-BR)