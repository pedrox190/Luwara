const STORAGE_KEY = "carrinho";

function finalizarCompra() {
  const carrinho = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const contador = document.getElementById("contador-carrinho");
  if (!contador) return;
  const totalQtd = carrinho.reduce((s, it) => s + (it.qtd || 0), 0);
  if (totalQtd > 0) {
    alert("compra realizada com sucesso!");
  } else {
    alert("O carrinho está vazio")
  }
}

// addcarrinho.js
// Mantém popup igual e salva produto em localStorage (chave "carrinho")

(function () {

  // Atualiza contador no header (soma de todas as quantidades)
  function atualizarContador() {
    const carrinho = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const contador = document.getElementById("contador-carrinho");
    if (!contador) return;
    const totalQtd = carrinho.reduce((s, it) => s + (it.qtd || 0), 0);
    if (totalQtd > 0) {
      contador.style.display = "flex";
      contador.textContent = totalQtd;
    } else {
      contador.style.display = "none";
      contador.textContent = "0";
    }
  }

  // Exibe popup igual ao seu layout
  function mostrarPopup(texto, onConfirm) {
    const popup = document.getElementById("popup");
    const textoPopup = document.getElementById("textoPopup");
    const confirmar = document.getElementById("confirmar");
    const cancelar = document.getElementById("cancelar");
    if (!popup || !textoPopup || !confirmar || !cancelar) return;

    textoPopup.innerText = texto;
    popup.style.display = "flex";

    // limpa listeners antigos
    confirmar.onclick = null;
    cancelar.onclick = null;

    confirmar.onclick = () => {
      popup.style.display = "none";
      if (typeof onConfirm === "function") onConfirm();
    };
    cancelar.onclick = () => {
      popup.style.display = "none";
    };
  }

  // Salva produto no localStorage (se já existe, incrementa qtd)
  function salvarNoCarrinho(produto) {
    const carrinho = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const existente = carrinho.find(p => p.id === produto.id);

    if (existente) {
      existente.qtd = (existente.qtd || 0) + produto.qtd;
    } else {
      carrinho.push(produto);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(carrinho));
    atualizarContador();
  }

  // Converte string de preço ("R$ 60,00" ou "R$ 190") para número 60, 190
  function parsePreco(text) {
    if (!text) return 0;
    // remove R$, espaços e pontos de milhar, troca vírgula por ponto
    const raw = text.replace("R$", "").replace(/\s/g, "").replace(/\./g, "").replace(",", ".");
    const n = parseFloat(raw);
    return isNaN(n) ? 0 : n;
  }

  // Ao carregar, conecta os botões dos cards
  document.addEventListener("DOMContentLoaded", () => {
    atualizarContador();

    const cards = document.querySelectorAll(".novidades > div");
    cards.forEach((card, index) => {
      const botao = card.querySelector(".botoes");
      if (!botao) return;

      // nome: pegamos o primeiro h3 (se houver que contenha o nome)
      const h3s = card.querySelectorAll("h3");
      const nome = h3s && h3s.length > 0 ? h3s[0].innerText.trim() : `Produto ${index + 1}`;

      // preço: dentro do card tem h3 com id="c1" (ou similar)
      const precoEl = card.querySelector("#c1");
      const preco = precoEl ? parsePreco(precoEl.innerText) : 0;

      // imagem: primeira img do card
      const imgEl = card.querySelector("img");
      const img = imgEl ? imgEl.src : "";

      const produtoId = index + 1; // id simples baseado na posição (pode mudar se quiser)

      botao.addEventListener("click", () => {
        const texto = `${nome} foi adicionado ao carrinho.`;
        mostrarPopup(texto, () => {
          const produto = {
            id: produtoId,
            nome: nome,
            preco: preco,
            img: img,
            qtd: 1
          };
          salvarNoCarrinho(produto);
        });
      });
    });
  });

})();
