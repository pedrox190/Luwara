const botoes2 = document.querySelectorAll(".botoes");
const popup = document.getElementById("popup");
const textoPopup = document.getElementById("textoPopup");
const confirmar = document.getElementById("confirmar");
const cancelar = document.getElementById("cancelar");

let produtoSelecionado = null;

botoes2.forEach(btn => {
    btn.onclick = () => {
        produtoSelecionado = btn;
        textoPopup.textContent = "Deseja adicionar este produto ao carrinho?";
        popup.style.display = "flex";
        
    };
});

confirmar.onclick = () => {
    adicionarCarrinho();
    popup.style.display = "none";
    alert("Adicionado com sucesso! 🛒");
};

cancelar.onclick = () => {
    popup.style.display = "none";
};


let quantidade = 0;

function adicionarCarrinho() {
    quantidade++;
    const badge = document.getElementById("contador-carrinho");
    badge.textContent = quantidade;
    badge.style.display = "flex";
}
