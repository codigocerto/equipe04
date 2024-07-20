# API - Envio Emails

## Funcionalidades

✔️ Envio de Emails

## Funcionalidades Pendentes

- [x] Re-envio do e-mail

  - [x] Nova rota para re-enviar
  - [x] A rota deve receber o e-mail como query params
  - [x] A rota deve enviar o e-mail novamente para o e-mail passado

- [x] Cancelar envio dos emails

  - [x] Nova rota para cancelar
  - [x] Adicionar uma nova coluna no banco de dados com o status de receber ou não os e-mails
  - [x] A rota deve receber o e-mail como query params
  - [x] A rota deve alterar o status de receber os e-mails para não receber

- [x] Remover o registro no banco de dados
  - [x] Nova rota para remover o registro do banco de dados
  - [x] A rota deve receber o e-mail como query params
  - [x] A rota deve remover todos os dados do usuário do banco de dados

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
