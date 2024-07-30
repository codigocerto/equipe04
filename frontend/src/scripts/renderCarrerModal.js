const carrerInfo = [
  {
    "title": "UX/UI Design",
    "content": [
      "UX/UI Design é uma especialidade focada na criação de interfaces digitais agradáveis e intuitivas. O UX Design envolve pesquisas, criação de personas, wireframes e testes de usabilidade. O objetivo é garantir que o produto seja útil, fácil de usar e desejável.",
      "O UI Design se concentra na estética e interatividade do produto, escolhendo cores, tipografia e ícones. Ele considera princípios de design visual para criar uma interface bonita e funcional. Juntos, UX e UI garantem uma experiência completa e satisfatória."
    ]
  },
  {
    "title": "Front-End",
    "content": [
      "Front-end é a área do desenvolvimento web focada na criação da interface que os usuários interagem diretamente. Envolve a construção de elementos visuais e interativos, garantindo que as páginas e aplicações sejam atraentes e funcionais.",
      "Desenvolvedores front-end trabalham para assegurar que a interface seja responsiva e acessível, proporcionando uma experiência de usuário agradável em diferentes dispositivos e navegadores. Eles colaboram com designers e desenvolvedores backend para integrar funcionalidades e otimizar o desempenho da aplicação."
    ]
  },
  {
    "title": "Back-End",
    "content": [
      "O Back-end é a área do desenvolvimento web responsável pela lógica, banco de dados e desempenho dos servidores. Envolve o uso de linguagens como Python, Java, Ruby e PHP para criar a estrutura que suporta a funcionalidade de um site ou aplicação.",
      "Desenvolvedores backend garantem que os dados sejam processados de forma eficiente e segura. Eles trabalham em conjunto com desenvolvedores front-end para integrar a interface do usuário com o servidor, assegurando que todas as funcionalidades funcionem corretamente e de maneira fluida."
    ]
  },
  {
    "title": "Quality Assurance - QA",
    "content": [
      "QA (Quality Assurance) é a área responsável por garantir a qualidade dos produtos de software. Envolve a realização de testes sistemáticos para identificar e corrigir erros, bugs e inconsistências no software antes do lançamento.",
      "Profissionais de QA criam e executam diversos tipos de testes, como testes funcionais, de desempenho e de segurança. Eles colaboram com desenvolvedores e outros membros da equipe para assegurar que o produto final atenda aos padrões de qualidade e às expectativas dos usuários."
    ]
  },
  {
    "title": "Dados",
    "content": [
      "Dados (Data) referem-se à coleta, armazenamento e análise de informações para gerar insights valiosos. Envolve a utilização de ferramentas e técnicas para organizar e interpretar grandes volumes de dados, ajudando na tomada de decisões informadas.",
      "Profissionais de dados, como cientistas de dados e analistas, trabalham com linguagens de programação, estatísticas e aprendizado de máquina. Eles transformam dados brutos em informações acionáveis, contribuindo para estratégias empresariais e soluções inovadoras em diversas áreas."
    ]
  },
  {
    "title": "Development and Operations - DevOps",
    "content": [
      "DevOps é uma abordagem que integra as equipes de desenvolvimento de software (Dev) e operações de TI (Ops) para melhorar a colaboração e a eficiência no ciclo de vida do software. Utiliza práticas automatizadas para a integração contínua, entrega contínua e monitoramento de aplicações.",
      "Profissionais de DevOps trabalham para automatizar processos, aumentar a velocidade de deploys e melhorar a confiabilidade dos sistemas. Eles utilizam ferramentas como Docker, Kubernetes e Jenkins para garantir que o software seja desenvolvido, testado e implantado de forma rápida e segura, facilitando a inovação contínua."
    ]
  },
]

function handleModal (carrer) {
  const carrerModal = document.querySelector('#carrerModal')
  const modalTitle = document.querySelector('#carrerModalLabel')
  const modalContent = document.querySelector('#carrerModalContent')

  modalTitle.textContent = `${carrerInfo[carrer].title}`
  modalContent.innerHTML = `
    <p>${carrerInfo[carrer].content[0]}</p>
    <p>${carrerInfo[carrer].content[1]}</p>
  `
}
