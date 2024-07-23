describe('Lógica de envio de e-mails', () => {
  const apiUrl = 'http://localhost:3000/cadastro'; // ajuste a URL para o endpoint da sua API

  it('Verifica se o usuário já está cadastrado', () => {
    cy.intercept('POST', apiUrl, {
      statusCode: 400,
      body: { error: 'Email já cadastrado' },
    }).as('postCadastro');

    const user = {
      nome: 'teste joao',
      email: 'joao.teste@example.com',
      pais: 'Brasil',
      funcaoPretendida: 'desenvolvedor full-stack',
      disponibilidade: 'dia todo',
      senioridade: 'Junior',
      linkedin: 'https://linkedin.com/in/joaoteste',
      liderar: false,
      experiencia: 2,
      newsletter: false,
    };

    cy.request({
      method: 'POST',
      url: apiUrl,
      body: user,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq('Email já cadastrado');
    });
  });
});
