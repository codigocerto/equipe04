const accordion = document.querySelector('#custom-accordion')
const accordionContent = [
  {
    "id": "firstItem",
    "question": "Há possibilidade de contratação após o período de voluntariado?",
    "anwser": "A comunidade não dispõe de vagas para contratar os membros, porém o conhecimento e experiência adquiridos durante sua participação irão aumentar consideravelmente suas chances de ser contratado."
  }, 
  {
    "id": "secondItem",
    "question": "Quais são os requisitos para participar como voluntário?",
    "anwser": "É importante ter conhecimento teórico básico na área desejada. No entanto, a experiência prática, seja por meio de projetos de curso, atividades voluntárias, simulações ou experiências reais, e certificações, podem lhe ajudar na seleção!"
  }, 
  {
    "id": "thirdItem",
    "question": "Quanto tempo preciso dedicar ao programa?",
    "anwser": "Cada equipe decide o horário que melhor se adapta à disponibilidade dos seus membros. Os times são responsáveis por gerenciar suas próprias reuniões, o que exige comprometimento e responsabilidade. Ao se inscrever na comunidade, você deverá informar em quais turnos está disponível para participar do projeto."
  },
  {
    "id": "fourthItem",
    "question": "Quais são as áreas de atuação disponíveis?",
    "anwser": "UI/UX Design, Desenvolvimento Front-End, Back-End, Quality Assurance, Dados e Metodologias ágeis."
  },
  {
    "id": "fifthItem",
    "question": "O programa de voluntariado é gratuito?",
    "anwser": "Sim, a comunidade não exige NENHUM tipo de contribuição financeira para participar do programa."
  },
]

function handleContent (id) {
  const allItemsContent = document.querySelectorAll('.custom-accordion__item__body')
  const accordionItemContent = document.querySelector(`#content${id}`)
  const itemDisplay = accordionItemContent.style.display
  const allItemsIcon = document.querySelectorAll('.item-icon')
  const accordionItemIcon = document.querySelector(`#icon${id}`)
  const iconClass = accordionItemIcon.classList
  
  allItemsContent.forEach(content => {
    content.style.display = 'none'
  })

  allItemsIcon.forEach(icon => {
    icon.classList.remove('bi-chevron-up')
  })

  if(accordionItemContent && itemDisplay == 'none' && iconClass.contains('bi-chevron-down')) {
    accordionItemContent.style.display ='block'
    iconClass.add('bi-chevron-up')
  } 
}

function renderAccordion () { 
  accordionContent.forEach(item => {
    const accordionItem = document.createElement('div')
    accordionItem.id = item.id

    if (accordionItem.id == 'firstItem') {
      accordionItem.classList.add('custom-accordion__item--first')
    } else {
      accordionItem.classList.add('custom-accordion__item')
    }

    accordionItem.onclick = function () {
      handleContent(item.id)
    }

    accordionItem.innerHTML = `
      <div class="custom-accordion__item__header">
        <h4>
          ${item.question}
        </h4>
        <i class="bi bi-chevron-down item-icon" id=icon${item.id}></i>
      </div>
      <div class="custom-accordion__item__body font-roboto" id=content${item.id} style="display: none;">
        <p>
          ${item.anwser}
        </p>
        <a href="#join-us">Adorei, quero fazer parte.</a>
      </div>
    `
    accordion.appendChild(accordionItem)    
  })
}


document.addEventListener('DOMContentLoaded', function() {
  renderAccordion()
})