const formResendEmail = document.getElementById('form-resend-email')
formResendEmail.addEventListener('submit', async function(event) {
  event.preventDefault()

  const email = document.getElementById('savedEmail').value.toLowerCase()

  const response = {
    email: email
  }

  try {
    const fetchResponse = await fetch('https://equipe04-production.up.railway.app/resend-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response)
    })
    
    const result = await fetchResponse.json();

    const modalMessageBody = document.getElementById('modalMessageBody');
    const modalTitle = document.getElementById('messageModalLabel');
    const btnModal = document.getElementById('btn-modal');
    const resendEmailModal = document.getElementById('resendEmailModal')

    if (fetchResponse.ok) {
      modalTitle.textContent = 'Sucesso'
      modalTitle.classList.remove('text-danger')
      modalTitle.classList.add('text-success')
      btnModal.classList.remove('btn-danger')
      btnModal.classList.add('btn-success')
      modalMessageBody.textContent = result.message || 'Cadastro enviado com sucesso';
      resendEmailModal.style.display = 'none'
    } else {
      modalTitle.textContent = 'Tente Novamente'
      modalTitle.classList.remove('text-success')
      modalTitle.classList.add('text-danger')
      btnModal.classList.remove('btn-success')
      btnModal.classList.add('btn-danger')
      modalMessageBody.textContent = result.error || 'Erro no envio do cadastro';
      resendEmailModal.style.display = 'none'
    }

    const messageModal = new bootstrap.Modal(document.getElementById('messageModal'));
    messageModal.show();

  } catch (error) {
    console.error(`Error: ${error}`);
    const modalMessageBody = document.getElementById('modalMessageBody');
    modalMessageBody.textContent = 'Erro ao processar a requisição';

    const messageModal = new bootstrap.Modal(document.getElementById('messageModal'));
    messageModal.show();
  }
})