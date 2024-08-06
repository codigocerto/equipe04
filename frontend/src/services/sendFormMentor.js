const formMentor = document.getElementById('form-mentor')
formMentor.addEventListener('submit', async function(event) {
  event.preventDefault()

  const modalMessageBody = document.getElementById('modalMessageBody');
  const modalTitle = document.getElementById('messageModalLabel');
  const btnModal = document.getElementById('btn-modal');

  const nome = document.getElementById('fullName').value.toLowerCase()
  const email = document.getElementById('email').value.toLowerCase()
  const telefone = document.getElementById('whatsapp').value
  const pais = document.getElementById('country').value
  const funcaoPretendida = document.getElementById('stack').value
  const disponibilidade = document.getElementById('availability').value
  const experiencia = document.getElementById('experience').value
  const linkedin = document.getElementById('linkedin').value
  const liderar = document.querySelector('input[name="leader"]:checked').value === 'true' ? true : false
  const tipo = true

  const response = {
    nome: nome,
    email: email,
    telefone: telefone,
    pais: pais,
    funcaoPretendida: funcaoPretendida,
    disponibilidade: disponibilidade,
    experiencia: experiencia,
    linkedin: linkedin,
    liderar: liderar,
    tipo: tipo
  }

  try {

    let fetchResponse = false

    if(linkedin != '') {
      fetchResponse = await fetch('https://equipe04-production.up.railway.app/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(response)
      });
    } else {
      modalTitle.textContent = 'Linkedin não preenchido'
      modalMessageBody.textContent = 'Preencha seu linkedin corretamente.'
      modalTitle.classList.add('text-danger')
      btnModal.classList.add('btn-danger')
    }

    const result = await fetchResponse.json();

    if (fetchResponse.ok) {
      modalTitle.textContent = 'Sucesso'
      modalTitle.classList.remove('text-danger')
      modalTitle.classList.add('text-success')
      btnModal.classList.remove('btn-danger')
      btnModal.classList.add('btn-success')
      btnModal.addEventListener('click', function() {
        window.location.href = "https://equipe04.vercel.app/"
      })
      modalMessageBody.textContent = result.message || 'Cadastro enviado com sucesso.';
    } else {
      modalTitle.textContent = 'Tente Novamente'
      modalTitle.classList.remove('text-success')
      modalTitle.classList.add('text-danger')
      btnModal.classList.remove('btn-success')
      btnModal.classList.add('btn-danger')
      modalMessageBody.textContent = result.error || 'Erro no envio do cadastro.';
    }

    const messageModal = new bootstrap.Modal(document.getElementById('messageModal'));
    messageModal.show();

  } catch (error) {
    console.error(`Error: ${error}`);
    const modalMessageBody = document.getElementById('modalMessageBody');
    modalTitle.textContent = 'Erro no servidor.'
    modalMessageBody.textContent = 'Erro ao processar a requisição.';

    const messageModal = new bootstrap.Modal(document.getElementById('messageModal'));
    messageModal.show();
  }
  
})