// Condição para desbloquear o botão de confirmação do termo de responsabilidade.
const termos = document.getElementById('terms')
const btnTermos = document.getElementById('btnTerms')
AOS.init()

function aceitarTermo() {
  if(btnTermos.hasAttribute('disabled')) {
    btnTermos.removeAttribute('disabled')
  } else {
    btnTermos.setAttribute('disabled', 'true')
  }
}

function enviarTermoVoluntario() {
  window.location.href = '../pages/form-voluntario.html';
}

function enviarTermoMentor() {
  window.location.href = '../pages/form-mentoria.html';
}

function mudarCorSelect(id) {
  const select = document.getElementById(id)

  select.classList.remove('select-placeholder')
}

//  validação bootstrap
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// validar telefone

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}



