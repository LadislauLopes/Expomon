
function criarCards(qtd) {
  const container = document.getElementById("cards-container");

  // Listas com os títulos, textos e links das imagens
  const titulos = ["Título 1", "Título 2", "Título 3", "Título 4", "Título 5", "Título 6", "Título 7", "Título 8", "Título 9",
    "Título 10", "Título 11", "Título 12", "Título 13", "Título 14", "Título 15"];
  const textos = [
    "Texto descritivo para o Card 1.",
    "Texto descritivo para o Card 2.",
    "Texto descritivo para o Card 3.",
    "Texto descritivo para o Card 4.",
    "Texto descritivo para o Card 5.",
    "Texto descritivo para o Card 6.",
    "Texto descritivo para o Card 7.",
    "Texto descritivo para o Card 8.",
    "Texto descritivo para o Card 9.",
    "Texto descritivo para o Card 10.",
    "Texto descritivo para o Card 11.",
    "Texto descritivo para o Card 12.",
    "Texto descritivo para o Card 13.",
    "Texto descritivo para o Card 14.",
    "Texto descritivo para o Card 15."
  ];
  const imagens = [
    "https://via.placeholder.com/300?text=Image1",
    "https://via.placeholder.com/300?text=Image2",
    "https://via.placeholder.com/300?text=Image3",
    "https://via.placeholder.com/300?text=Image4",
    "https://via.placeholder.com/300?text=Image5",
    "https://via.placeholder.com/300?text=Image6",
    "https://via.placeholder.com/300?text=Image7",
    "https://via.placeholder.com/300?text=Image8",
    "https://via.placeholder.com/300?text=Image9",
    "https://via.placeholder.com/300?text=Image10",
    "https://via.placeholder.com/300?text=Image11",
    "https://via.placeholder.com/300?text=Image12",
    "https://via.placeholder.com/300?text=Image13",
    "https://via.placeholder.com/300?text=Image14",
    "https://via.placeholder.com/300?text=Image15"
  ];

  // Verifica se a quantidade excede o tamanho das listas e ajusta
  const maxCards = Math.min(qtd, titulos.length);

  for (let i = 0; i < maxCards; i++) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.id = `card-${i + 1}`;
    card.innerHTML = `
        <div class="card" style="width: 100%;">
          <img class="card-img-top" src="${imagens[i]}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${titulos[i]}</h5>
            <p class="card-text">${textos[i]}</p>
          </div>
        </div>
      `;
    card.classList.add('esconder'); // Inicia escondido
    container.appendChild(card);
  }
}

function abrirModal(imagemUrl, descricao) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");

  modalImage.src = imagemUrl;
  modalDescription.textContent = descricao;

  modal.style.display = "flex";
}

function fecharModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function aoSucessoNaLeitura(textoDecodificado, resultadoDecodificado) {
  console.log(`Código lido: ${textoDecodificado}`);

  const cardElement = document.getElementById(`card-${textoDecodificado}`);
  if (cardElement && cardElement.classList.contains('esconder')) {
    cardElement.classList.remove('esconder');
    marcarCardComoLiberado(textoDecodificado);
  }
}

function marcarCardComoLiberado(cardId) {
  let cardsLiberados = JSON.parse(localStorage.getItem('cardsLiberados')) || [];
  if (!cardsLiberados.includes(cardId)) {
    cardsLiberados.push(cardId);
    localStorage.setItem('cardsLiberados', JSON.stringify(cardsLiberados));
  }

  if (cardsLiberados.length === 15) {
    gerarIdUsuario();
  }
}

function gerarIdUsuario() {
  const userId = 'user-' + Date.now();
  localStorage.setItem('userId', userId);
  alert("Parabéns! Você liberou todos os cards. Por favor, insira seus dados para participar do sorteio.");
  solicitarDadosUsuario();
}

function solicitarDadosUsuario() {
  const nome = prompt("Digite seu nome:");
  const telefone = prompt("Digite seu telefone:");

  if (nome && telefone) {
    const userInfo = {
      userId: localStorage.getItem('userId'),
      nome,
      telefone
    };
    console.log("Informações do usuário:", userInfo);
  } else {
    alert("Por favor, forneça todas as informações.");
  }
}

function aoErroNaLeitura(erro) {
  console.warn(`Erro ao ler o código: ${erro}`);
}

function exibirCardsLiberados() {
  const cardsLiberados = JSON.parse(localStorage.getItem('cardsLiberados')) || [];
  cardsLiberados.forEach(cardId => {
    const cardElement = document.getElementById(`card-${cardId}`);
    if (cardElement) {
      cardElement.classList.remove('esconder');
    }
  });
}

window.onload = function () {
  criarCards(15);
  exibirCardsLiberados();

  const leitorQrcodeHtml5 = new Html5QrcodeScanner(
    "leitor",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    false
  );

  leitorQrcodeHtml5.render(aoSucessoNaLeitura, aoErroNaLeitura);
}
