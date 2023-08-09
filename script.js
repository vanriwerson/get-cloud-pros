const CARDS_CONTAINER = document.getElementById('cards-container');

const cloudPros = [
  {
    name: 'Bruno Riwerson Silva',
    avatarSrc: 'bruno-riwerson-silva.jpeg',
    resumeHref: 'bruno-riwerson-silva.pdf',
    summary: 'Sou uma pessoa inconformada, automotivada e colaborativa sempre em busca de novos desafios e conhecimentos. Possuo vasta experiência em atendimento ao cliente, focando na geração de valor através da escuta empática e resolução de conflitos.',
    linkedinUrl: 'https://www.linkedin.com/in/bruno-riwerson/',
  },
];

const presentationCard = (pro) => {
  return (`<section class="card">
    <div class="avatar-container">
      <img class="avatar" src="${pro.avatarSrc}" alt="Avatar de ${pro.name}"/>
    </div>

    <div class="text-container">
      <h4 class="name">${pro.name}</h4>
      <p class="presentation-text">${pro.summary}</p>
    </div>

    <a class="cta" href="${pro.resumeHref}" target="_blank">Acesse meu currículo</a>

    <a class="linkedin-profile" href="${pro.linkedinUrl}" target="_blank"><i class="fab fa-linkedin"></i></a>
  </section>`)
};

function renderPresentationCards() {
  for (const pro of cloudPros) {
    const card = presentationCard(pro);

    CARDS_CONTAINER.innerHTML += card;
  }
}

renderPresentationCards();
