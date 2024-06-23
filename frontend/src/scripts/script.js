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

// ===================================================
// Validação do form dos Inputs no front end

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const InputCel = document.querySelector("#cel");
const selectCountry = document.querySelector("#country");
const selectFunction = document.querySelector("#function");
const selectPeriod = document.querySelector("#period");
const selectLevel = document.querySelector("#level");
const inputProfile = document.querySelector("#profile");

// Função para validar email => Regex
function isEmailValid(email) {
  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Verifica se o nome está vazio
  if (nameInput === "") {
    alert("Coloque seu Nome");
    return;
  }

  // Verifica se o email está preenchido && é valido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("digite um email valido");
    return;
  }

  if (InputCel === "") {
    alert("Coloque o seu nº de celular");
    return;
  }

  if (selectCountry === "") {
    alert("Coloque o seu País");
    return;
  }

  if (selectFunction === "") {
    alert("Coloque a sua Função");
    return;
  }

  if (selectPeriod === "") {
    alert("Coloque a sua Disponibilidade");
    return;
  }

  if (selectLevel === "") {
    alert("Coloque o seu nível");
    return;
  }

  if (inputProfile === "") {
    alert("Coloque o seu linkedin");
    return;
  }
  // Se todos os campos estiverem preenchidos, então envie o form.
  form.submit();
});
