const CARDS_HTML = `
<section id="cards" class="container row cards">
</section>
`;

const cards = document.getElementById('cards');

async function getCards() {
  console.log('INIT');
  loading = createLoading();
  cards.appendChild(loading);
  await getMusics();
  setTimeout(() => {
    console.log('END');
    cards.removeChild(loading);
  }, 3000);
}

async function getMusics() {
  const response = await fetch('/musics');
  console.log(response);
}

function createLoading() {
  const loading = document.createElement('div');
  loading.classList.add('container');
  loading.id = 'loading';
  const lds_default = document.createElement('div');
  lds_default.classList.add('lds-default');
  for (let i = 0; i < 12; i++) {
    lds_default.appendChild(document.createElement('div'));
  }
  loading.appendChild(lds_default);
  return loading;
}
