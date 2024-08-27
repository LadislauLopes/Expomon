// Função para abrir o modal com conteúdo dinâmico
function abrirModal(imagemUrl, descricao) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
  
    // Atualiza a imagem e a descrição
    modalImage.src = imagemUrl;
    modalDescription.textContent = descricao;
  
    // Mostra o modal
    modal.style.display = "flex";
  }
  
  // Função para fechar o modal
  function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  // Função chamada após a leitura do QR Code
  function aoSucessoNaLeitura(textoDecodificado, resultadoDecodificado) {
    console.log(`Código lido: ${textoDecodificado}`);
  
    // Verifica o conteúdo do QR Code e abre o modal correspondente
    if (textoDecodificado === "1") {
      abrirModal("https://via.placeholder.com/300", "Você escaneou o QR Code 1!");
    } else if (textoDecodificado === "2") {
      abrirModal("https://via.placeholder.com/300", "Você escaneou o QR Code 2!");
    } else {
      console.log("QR Code desconhecido. Nenhum modal será aberto.");
    }
  }
  
  // Função chamada ao ocorrer erro na leitura do QR Code
  function aoErroNaLeitura(erro) {
    console.warn(`Erro ao ler o código: ${erro}`);
  }
  
  // Função para criar os cards dinamicamente
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
      const cardHTML = `
        <div class="col-md-4 mb-4 " id="cards_id ${i + 1}">
          <div class="card" style="width: 100%;">
            <img class="card-img-top" src="${imagens[i]}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${titulos[i]}</h5>
              <p class="card-text">${textos[i]}</p>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += cardHTML;
    }
  }
  
  window.onload = function() {
    criarCards(15); // Criar 15 cartões dinamicamente
    
    const larguraDaJanela = window.innerWidth;
    const alturaDaJanela = window.innerHeight;

    // Verificar se o dispositivo é um celular
    const isMobile = larguraDaJanela < 768;  // Assume que dispositivos móveis têm largura menor que 768px

    // Ajustar o tamanho do qrbox com base no dispositivo
    let larguraQrbox, alturaQrbox;

    if (isMobile) {
        larguraQrbox = Math.min(larguraDaJanela * 0.8, 250);  // Até 80% da largura da janela no celular, limitado a 250px
        alturaQrbox = Math.min(alturaDaJanela * 0.8, 250);    // Até 80% da altura da janela no celular, limitado a 250px
    } else {
        larguraQrbox = Math.min(larguraDaJanela * 0.5, 300);  // Até 50% da largura da janela no desktop, limitado a 300px
        alturaQrbox = Math.min(alturaDaJanela * 0.5, 300);    // Até 50% da altura da janela no desktop, limitado a 300px
    }
    
    const leitorQrcodeHtml5 = new Html5QrcodeScanner(
      "leitor", 
      { fps: 10, qrbox: { width: larguraQrbox, height: alturaQrbox } }, 
      false
    );

    // Renderizando o scanner
    leitorQrcodeHtml5.render(aoSucessoNaLeitura, aoErroNaLeitura);
};