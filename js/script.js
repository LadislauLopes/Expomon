function criarCards(qtd) {
  const container = document.getElementById("cards-container");

  const titulos = ["titulo 1", "titulo2 ", "Título 3", "Título 4", "Título 5", "Título 6", "Título 7", "Título 8", "Título 9",
    "Título 10", "Título 11", "Título 12", "Título 13", "Título 14", "Título 15"];
  const textos = [
    "Texto descritivo para o   1.",
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
    "https://scontent.frbr2-1.fna.fbcdn.net/v/t39.30808-1/361244852_700246285449068_3513926616153416103_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=nMVxEzrzGHMQ7kNvgFTcxTQ&_nc_ht=scontent.frbr2-1.fna&oh=00_AYAzT1HCwwK9O3OaP8Pcz_5DrNeXguOYPo7ERARwPml6BQ&oe=66D325D0",
    "https://creditis.com.br/img/destaque/marca/Agroboi-Materiais-De-Constru%C3%A7%C3%A3o-e-Decora%C3%A7%C3%A3o---10.jpg",
    "https://media.licdn.com/dms/image/v2/C4D0BAQGUKcgl0yX2Ew/company-logo_200_200/company-logo_200_200/0/1630476929404/barriga_verde_logo?e=2147483647&v=beta&t=tqVN2-HibzEU136N7a-xyorOBErK_CouLCnaoqk7bPo",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TrZLDDKy9revVk-kOjFSvXNotHI8yesFGw&s",
    "https://fastly.4sqi.net/img/general/600x600/14946438_V2k0bavZveCh0uG6azK52ymmN041KFmkgb1B1F4pFd0.jpg",
    "https://logodownload.org/wp-content/uploads/2017/04/britania-logo-9.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0k6MlOFmfX_ETpZmCOK_mQH-T34DOnWhVAw&s",
    "https://bebidasquinari.com.br/wp-content/uploads/2022/11/Logomarca-Bebidas-Quinari.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Logo_Lojas_Havan.jpg",
    "https://img.freepik.com/fotos-premium/xicara-de-cafe-e-espigas-de-trigo-no-fundo-cinza_87910-5695.jpg",
    "https://www.logo-designer.co/storage/2013/08/evolution-of-the-ford-mustang-badge-logo-design.jpg",
    "https://logodownload.org/wp-content/uploads/2014/02/Chevrolet-logo-5.jpg",
    "https://images.tcdn.com.br/img/img_prod/808734/90_adesivo_decorativo_em_relevo_facil_aplicacao_apple_6737_1_8fa89362f054bf246653ebf2dac202a9.jpg",
    "https://www.logotipo.pt/wp-content/uploads/2016/09/coca-cola-logo-300x235.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg"
  ];

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

function verificarData() {
  const dataAtual = new Date().toDateString(); // Formato simples de data
  const dataArmazenada = localStorage.getItem('dataLiberacao');

  if (dataArmazenada !== dataAtual) {
    localStorage.clear(); // Apaga todo o localStorage
    localStorage.setItem('dataLiberacao', dataAtual); // Armazena a nova data
  }
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

window.onload = function () {
  verificarData(); // Verifica a data ao carregar a página
  criarCards(15);
  exibirCardsLiberados();

  const leitorQrcodeHtml5 = new Html5QrcodeScanner(
    "leitor",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    false
  );

  leitorQrcodeHtml5.render(aoSucessoNaLeitura, aoErroNaLeitura);
}