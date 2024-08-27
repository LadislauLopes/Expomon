function criarCards(qtd) {
  const container = document.getElementById("cards-container");

  const titulos = ["Tereré Top", "Agroboi", "Barriga Verde", "Mercale", "AraSuper", "Britania", "Cruzeirense", "Quinarí", "Havan", "Café Contri",
    "Pastoril Agropecaria Modas", "Chevrolet", "Apple", "Coca-Cola", "Honda"];
  const textos = [
    "O Tereré Top é um local em Rio Branco, Acre, Brasil, que serve tereré, uma bebida ancestral paraguaia feita com água gelada e ervas medicinais. O nome 'tereré' vem do ruído do ronco da guampa, quando a bebida está terminando. O tereré é uma bebida refrescante que pode ser consumida com água gelada ou suco de fruta. Acredita-se que o tereré tenha vários benefícios para a saúde, como estimular atividades físicas e mentais, acelerar o metabolismo e prevenir problemas renais.",
    "Há quase quatro décadas de dedicação, ajudando o homem do campo a contar sua história, e com o trabalho sério e focado na satisfação do cliente, a AgroBoi é hoje uma das mais completas lojas de produtos agropecuários de Mato Grosso. A empresa sempre busca retribuir e reforçar o reconhecimento recebido através de investimentos em atividades de cultura, esporte e no atendimento à comunidade.",
    "'Barriga verde' é um gentílico usado para se referir a pessoas nascidas no estado brasileiro de Santa Catarina. O termo tem origem no século XVIII, quando os soldados do Regimento de Infantaria de Linha da Ilha usavam uma faixa verde sobre a barriga como parte do uniforme. Com o passar do tempo, o povo começou a usar o termo para se referir aos soldados catarinenses e à sua bravura em combate.",
    "Mercale é uma rede de supermercados, situados na cidade de Rio Branco, estado do Acre, que procura ter o melhor atendimento e trazer produtos de qualidade diferenciada para a sociedade acreana.",
    "Atuando no mercado desde 1981, iniciou suas atividades com uma pequena mercearia na Avenida Nações Unidas em Rio Branco capital do estado do Acre, voltada para produtos da cesta básica, a expansão só veio nos anos 90 quando passou a ser Araújo Supermercados, e marcando sua presença na vida dos acreanos abriu novas lojas e transformou-se, na maior rede supermercadistas do Acre, posto que ocupa até os dias de hoje.",
    "Uma empresa brasileira de eletrodomésticos e utensílios para casa, fundada em 1956 em Curitiba. Um termo antigo para a Grã-Bretanha, e também uma personificação feminina da ilha. O nome em latim deriva da forma grega Prettanike ou Brettaniai, que originalmente designou uma coleção de ilhas com nomes individuais, incluindo Albion ou Grã-Bretanha.",
    "O Cruzeirense é um refrigerante produzido pela Cervejaria NewAge, que é feito com frutos da floresta amazónica. O Cruzeirense é ideal para beber durante as refeições, com a família e amigos, ou para matar a sede e refrescar-se. Pode ser consumido sozinho em latas de 270 ml ou com a família em garrafas de 2 litros. O Cruzeirense é recomendado para ser bebido bem gelado.",
    "Antônio Carlos Lima costa é o fundador das Bebidas Quinarí, acreano, casado, pai de 5 filhos, veio de família humilde, já trabalhou em diversos ramos, bem diferentes um do outro, já foi dono de oficina, motel, taxi, sorveteria, ele é um empresário nato, estava sempre em busca de novos desafios.",
    "A Havan é uma cadeia de lojas brasileira que vende mais de 350 mil produtos, incluindo eletrônicos, eletrodomésticos, moda, brinquedos, decoração e muito mais. A empresa foi fundada em 1986 por Luciano Hang e Vanderlei de Limas em Brusque, Santa Catarina, com uma loja de 45 m² e um único funcionário. O nome Havan vem da união dos sobrenomes de Hang e Vanderlei.",
    "O Café Contri não é apenas uma marca de café; é um símbolo de tradição, sustentabilidade e inovação. Uma verdadeira fonte de orgulho para o Acre e uma inspiração para todos aqueles que buscam um futuro mais sustentável e próspero.",
    "Uma empresa agropecuária é uma empresa rural que produz bens ou serviços agrícolas para comercialização. A agropecuária é uma atividade económica que consiste em duas atividades principais: a agricultura e a pecuária.",
    "Chevrolet é um fabricante de veículos motorizados norte-americano fundado em 1911 por Louis Chevrolet. O nome da marca é uma homenagem ao piloto suíço, que nasceu em La Chaux-de-Fonds, na Suíça, no Natal de 1878. Chevrolet foi co-fundador da marca, juntamente com o empresário William C. Durant, e a empresa chamava-se Chevrolet Motor Car Company of Michigan.",
    "Apple (NASDAQ: AAPL; anteriormente Apple Computer) é uma empresa multinacional norte-americana que tem o objetivo de projetar e comercializar produtos eletrônicos de consumo, software de computador e computadores pessoais.",
    "Coca-Cola é um refrigerante carbonatado vendido em lojas, restaurantes, mercados e máquinas de venda automática em todo o mundo. Ele é produzido pela The Coca-Cola Company, sediada em Atlanta, Estados Unidos, e é muitas vezes referido apenas como Coca-Cola.",
    "Honda Motor Company (本田技研工業株式会社 Honda Giken Kōgyō Kabushiki Kaisha?), comumente conhecida como Honda (ホンダ?), é um dos mais importantes fabricantes de automóveis e motocicletas do mundo. Fundada por Soichiro Honda. Teve sua pronúncia 'ronda' consolidada — antes 'ondá' — após sua expansão e entrada no mercado alemão, determinando assim uma marca universal.[3] Embora seja uma empresa sediada no Japão, a Honda exporta os seus veículos para o mundo inteiro."
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