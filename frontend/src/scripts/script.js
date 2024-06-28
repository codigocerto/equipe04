console.log("Connected");

// ==========================================================
// Condição para desbloquear o botão de confirmação do termo de responsabilidade.

const checa = document.getElementsByName("toggle");
const numElementos = checa.length;
const bt = document.getElementById("aplica");
for (let x = 0; x < numElementos; x++) {
  checa[x].onclick = function () {
    // "input[name='toggle']:checked" conta os checkbox checados
    let cont = document.querySelectorAll("input[name='toggle']:checked").length;
    // ternário que verifica se há algum checado.
    // se não há, retorna 0 (false), logo desabilita o botão
    bt.hidden = cont ? false : true;
  };
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
