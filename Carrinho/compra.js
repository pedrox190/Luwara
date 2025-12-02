// compra.js
// Lê localStorage ("carrinho"), preenche tabela, controla +/-, remover, subtotal e total.

(function(){
  const STORAGE_KEY = "carrinho";

  // formata número para "123,45"
  function formatMoneyBR(value) {
    return value.toFixed(2).replace(".", ",");
  }

  // converte "R$ 120" ou número para float
  function toNumber(value) {
    if (typeof value === "number") return value;
    if (!value) return 0;
    const raw = String(value).replace("R$", "").replace(/\s/g, "").replace(/\./g, "").replace(",", ".");
    const n = parseFloat(raw);
    return isNaN(n) ? 0 : n;
  }

  // atualiza badge no header (soma qtd)
  function atualizarBadgeHeader() {
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

  // monta a tabela do carrinho
  function montarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const tbody = document.querySelector("tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (carrinho.length === 0) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td colspan="5" style="padding:30px 0; text-align:center; color:#666;">Seu carrinho está vazio</td>`;
      tbody.appendChild(tr);
      atualizarResumo();
      return;
    }

    carrinho.forEach(item => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>
          <div class="product">
            <img src="${item.img}" alt="${item.nome}" width="100" />
            <div class="info">
              <div class="name">${item.nome}</div>
              <div class="category"></div>
            </div>
          </div>
        </td>
        <td>R$ ${formatMoneyBR(Number(item.preco))}</td>
        <td>
          <div class="qty">
            <button class="btn-minus"><i class="bx bx-minus"></i></button>
            <span class="qtd">${item.qtd}</span>
            <button class="btn-plus"><i class="bx bx-plus"></i></button>
          </div>
        </td>
        <td class="total-item">R$ ${formatMoneyBR(Number(item.preco) * Number(item.qtd))}</td>
        <td>
          <button class="remove"><i class="bx bx-x"></i></button>
        </td>
      `;

      // ligar events
      tr.querySelector(".btn-plus").addEventListener("click", () => {
        alterarQuantidade(item.id, 1);
      });

      tr.querySelector(".btn-minus").addEventListener("click", () => {
        alterarQuantidade(item.id, -1);
      });

      tr.querySelector(".remove").addEventListener("click", () => {
        removerItem(item.id);
      });

      tbody.appendChild(tr);
    });

    atualizarResumo();
  }

  // atualiza subtotal, frete e total no resumo (usa seletores do seu HTML)
  function atualizarResumo() {
    const carrinho = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const subtotal = carrinho.reduce((s, it) => s + (Number(it.preco) * Number(it.qtd || 0)), 0);

    // seletores esperados no seu HTML (baseado no seu compra.html)
    const subtotalSpan = document.querySelector("aside .info > div:nth-child(1) span:last-child");
    const freteSpan = document.querySelector("aside .info > div:nth-child(2) span:last-child");
    const totalSpan = document.querySelector("aside footer span:last-child");

    if (subtotalSpan) subtotalSpan.innerText = `R$ ${formatMoneyBR(subtotal)}`;
    if (freteSpan) freteSpan.innerText = "Gratuito";
    if (totalSpan) totalSpan.innerText = `R$ ${formatMoneyBR(subtotal)}`;
  }

  // altera quantidade (delta = +1 ou -1)
  function alterarQuantidade(id, delta) {
    const carrinho = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const idx = carrinho.findIndex(p => p.id === id);
    if (idx === -1) return;

    carrinho[idx].qtd = Math.max(1, (carrinho[idx].qtd || 0) + delta);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(carrinho));
    montarCarrinho();
    atualizarBadgeHeader();
  }

  // remove item completamente
  function removerItem(id) {
    let carrinho = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    carrinho = carrinho.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(carrinho));
    montarCarrinho();
    atualizarBadgeHeader();
  }

  // inicialização
  document.addEventListener("DOMContentLoaded", () => {
    montarCarrinho();
    atualizarBadgeHeader();
  });

})();
