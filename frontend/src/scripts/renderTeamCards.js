const team = [
    {
        "id": 1,
        "fullName": "Rafael Lima",
        "stack": "Desenvolvedor Front-End",
        "urlLinkedin": "https://www.linkedin.com/in/rafael-limma/",
        "urlPortfolio": "https://github.com/rsantiago-lima"
    },
    {
        "id": 2,
        "fullName": "Nathalia Félix",
        "stack": "Desenvolvedora Back-End",
        "urlLinkedin": "https://www.linkedin.com/in/nathaliafelix31/",
        "urlPortfolio": "https://github.com/nathaliafelix31"
    },
    {
        "id": 3,
        "fullName": "Manoela Coelho",
        "stack": "Desenvolvedora Front-End",
        "urlLinkedin": "https://www.linkedin.com/in/manoela-coelho",
        "urlPortfolio": "https://mcs-portfolio-v1.vercel.app/"
    },
    {
        "id": 4,
        "fullName": "Jonas Nascimento",
        "stack": "Desenvolvedor Full-Stack",
        "urlLinkedin": "https://www.linkedin.com/in/jonashnasc/",
        "urlPortfolio": "https://github.com/jonasnascc"
    },
    {
        "id": 5,
        "fullName": "Taís Defante",
        "stack": "Desenvolvedora Back-End",
        "urlLinkedin": "https://www.linkedin.com/in/tais-defante/",
        "urlPortfolio": "https://github.com/taisadefante"
    },
    {
        "id": 6,
        "fullName": "Deyweson Almeida",
        "stack": "Desenvolvedor Back-End",
        "urlLinkedin": "https://www.linkedin.com/in/deyweson/",
        "urlPortfolio": "https://github.com/Deyweson"
    },
    {
        "id": 7,
        "fullName": "Luís Gustavo",
        "stack": "Desenvolvedor Front-End",
        "urlLinkedin": "https://www.linkedin.com/in/luisgustavodev/",
        "urlPortfolio": "https://github.com/Gustavo-lucca83"
    },
    {
        "id": 8,
        "fullName": "Nayara Karine",
        "stack": "Desenvolvedora Full-Stack",
        "urlLinkedin": "https://www.linkedin.com/in/nayarakarine-araujo",
        "urlPortfolio": "https://nayarakarine.com/"
    },
    {
        "id": 9,
        "fullName": "Iarlei Souza",
        "stack": "Desenvolvedor Front-End",
        "urlLinkedin": "https://www.linkedin.com/in/iarleisouza",
        "urlPortfolio": "https://iarleisouza.vercel.app/"
    },
    {
        "id": 10,
        "fullName": "Alef Adonais",
        "stack": "Desenvolvedor Front-End",
        "urlLinkedin": "https://www.linkedin.com/in/alef-adonais/",
        "urlPortfolio": "https://github.com/alefadonais5"
    },
    {
        "id": 11,
        "fullName": "John Sant Anna",
        "stack": "Desenvolvedor Back-End",
        "urlLinkedin": "https://www.linkedin.com/in/john-sant-anna-89bab890/",
        "urlPortfolio": "https://github.com/johnsantanna"
    },
    {
        "id": 12,
        "fullName": "Raul Albuquerque",
        "stack": "Desenvolvedor Full-Stack",
        "urlLinkedin": "https://www.linkedin.com/in/dev-raul-albuquerque",
        "urlPortfolio": "https://www.raulalbuquerque.com/"
    },
    {
        "id": 13,
        "fullName": "Lucas Souza",
        "stack": "Desenvolvedor Front-End",
        "urlLinkedin": "https://www.linkedin.com/in/lucas-souza-9b4620286/",
        "urlPortfolio": "https://github.com/LoradoREX?tab=repositories"
    },
    {
        "id": 14,
        "fullName": "Pedro Barreto",
        "stack": "Desenvolvedor Front-End",
        "urlLinkedin": "https://www.linkedin.com/in/pedro-barreto-877665b9/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "urlPortfolio": "https://github.com/DevPedroBarreto"
    },
    {
        "id": 15,
        "fullName": "David Robert",
        "stack": "Software Developer",
        "urlLinkedin": "https://www.linkedin.com/in/davidrobertt/",
        "urlPortfolio": "https://github.com/davidroberrt"
    },
]

function renderTeamCards(team) {
    const cardsContainer = document.getElementById('teamCardContainer');
    cardsContainer.innerHTML = '';

    team.forEach(member => {
        const card = document.createElement('article');
        card.classList.add('member-card');

        card.innerHTML = `
            <img src="../assets/images/equipe/${member.id}.jpeg" alt="${member.fullName} image" />
            <div class="member-card__info mt-3">
                <div class="member-card__info__name">
                    <span class="fw-medium">${member.fullName}</span>
                    <small class="fw-light">${member.stack}</small>
                </div> 
                <div class="member-card__info__socials">
                    <a href="${member.urlLinkedin}" target="_blank"">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="${member.urlPortfolio}" target="_blank" class="cursor-pointer">
                        <i class="bi bi-globe"></i>
                    </a>
                </div>
            </div>
        `;

        cardsContainer.appendChild(card);
    });
}

const shuffle = (team) => {
    for (let i = team.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [team[i], team[j]] = [team[j], team[i]];
    }
    return team;
}

const showTeamInfo = (team) => {
    const shuffledTeam = shuffle(team)
    return teamListHandler(shuffledTeam)
}

const teamListHandler = (team) => {
    const teamData = team.map(member => {
        const data = member
        return data
    })
    return teamData
}

document.addEventListener('DOMContentLoaded', function() {
    const newTeamOrder = showTeamInfo(team)
    renderTeamCards(newTeamOrder)
})
