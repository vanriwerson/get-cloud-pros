const CARDS_CONTAINER = document.getElementById('cards-container');

const cloudPros = [
  {
    name: 'Adriana Cortes Correa',
    avatarSrc: 'adriana-cortes-correa.jpeg',
    resumeHref: 'adriana-cortes-correa.pdf',
    summary: 'Estou motivada, tendo experiência progressiva em setor de monitoramento. Oferecendo conhecimentos em planilhas de excel, trabalho em equipe, foco e disposição, organização, capaz de navegar por situações de alto estresse e atingir os objetivos.',
    linkedinUrl: 'https://www.linkedin.com/in/adrianacortescorrea/',
  },
  {
    name: 'Bruno Riwerson Silva',
    avatarSrc: 'bruno-riwerson-silva.jpeg',
    resumeHref: 'bruno-riwerson-silva.pdf',
    summary: 'Sou uma pessoa inconformada, automotivada e colaborativa sempre em busca de novos desafios e conhecimentos. Possuo vasta experiência em atendimento ao cliente, focando na geração de valor através da escuta empática e resolução de conflitos.',
    linkedinUrl: 'https://www.linkedin.com/in/bruno-riwerson/',
  },
  {
    name: 'Edmar Marcelino dos Santos',
    avatarSrc: 'edmar-marcelino-dos-santos.jpg',
    resumeHref: 'edmar-marcelino-dos-santos.pdf',
    summary: 'Busco sempre  estar em conexão com as pessoas, sempre  buscando aprender e compartilhar todo apendizado para melhoria contínua. Possuo experiência como Analista de Suporte a Sistemas com expertise em SQL e identificação de causas raiz e tratativas, conhecimento em linguagens de programação.',
    linkedinUrl: 'https://www.linkedin.com/in/edmar-santos-m/',
  },
  {
    name: 'Gabriela Landim',
    avatarSrc: 'gabriela-landim.jpeg',
    resumeHref: 'gabriela-landim.pdf',
    summary: 'Construindo o futuro com paixão e habilidade, sou uma profissional determinada a fazer a diferença. Minha dedicação incansável, criatividade e compromisso com a excelência impulsionam meu trabalho, estou pronta para enfrentar desafios, superar expectativas e para contribuir significativamente.',
    linkedinUrl: 'https://www.linkedin.com/in/gabriela-landim-40a59b19b/',
  },
  {
    name: 'Leandro Henrique Pereira',
    avatarSrc: 'leandro-henrique-pereira.jpeg',
    resumeHref: 'leandro-henrique-pereira.pdf',
    summary: 'Profissional com experiência de mais de 20 anos na área de telecomunicações com foco em liderança de equipes. Pessoa de fácil convivência, esforçado, dedicado e com fácil adaptação a novos cargos e desafios',
    linkedinUrl: 'https://www.linkedin.com/in/leandro-henrique-498b05125/',
  },
  {
    name: 'Pedro Henrique Fonseca de Assis',
    avatarSrc: 'pedro-henrique-fonseca-de-assis.jpeg',
    resumeHref: 'pedro-henrique-fonseca-de-assis.pdf',
    summary: 'Estou sempre à disposição para solucionar e aprender com qualquer problema. Tenho uma grande facilidade de lidar em grupo e não perco o controle com facilidade. Meu objetivo é poder ajudar e fazer com que os obstáculos sejam superados e com isso novos conhecimentos sejam adquiridos.',
    linkedinUrl: 'https://www.linkedin.com/in/pedro-assis-fonseca-693947222/',
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
