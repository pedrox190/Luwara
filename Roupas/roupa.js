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
const img = document.querySelector(".foto1");

img.onmouseover = () => {
    img.style.opacity = 0;

    setTimeout(() => {
        img.src = "foto/foto1.webp";
        img.style.opacity = 1;
    }, 400);
};

img.onmouseout = () => {
    img.style.opacity = 0;

    setTimeout(() => {
        img.src = "img-index/664418e8-f275-4360-89a3-153196817931.jpg";
        img.style.opacity = 1;
    }, 400);
};



// SEGUNDA FOTO

const img2 = document.querySelector(".foto2");

img2.onmouseover = () => {
    img2.style.opacity = 0;

    setTimeout(() => {
        img2.src = "foto/foto2.jpeg";
        img2.style.opacity = 1;
    }, 400);
};

img2.onmouseout = () => {
    img2.style.opacity = 0;

    setTimeout(() => {
        img2.src = "img-index/top ombro so.jpg";
        img2.style.opacity = 1;
    }, 400);
};
const img3 = document.querySelector(".foto3");

img3.onmouseover = () => {
    img3.style.opacity = 0;

    setTimeout(() => {
        img3.src = "foto/foto3.webp";
        img3.style.opacity = 1;
    }, 400);
};

img3.onmouseout = () => {
    img3.style.opacity = 0;

    setTimeout(() => {
        img3.src = "foto/Imagem do WhatsApp de 2025-11-25 à(s) 21.34.24_0a564bf1.jpg";
        img3.style.opacity = 1;
    }, 400);
};
const img4 = document.querySelector(".foto4");

img4.onmouseover = () => {
    img4.style.opacity = 0;

    setTimeout(() => {
        img4.src = "foto/foto4.webp";
        img4.style.opacity = 1;
    }, 400);
};

img4.onmouseout = () => {
    img4.style.opacity = 0;

    setTimeout(() => {
        img4.src = "img-index/f9bbabd1-5f90-48e8-beb0-ba20c432b629.jpg";
        img4.style.opacity = 1;
    }, 400);
};
const img5 = document.querySelector(".foto5");

img5.onmouseover = () => {
    img5.style.opacity = 0;

    setTimeout(() => {
        img5.src = "foto/foto5.jpeg";
        img5.style.opacity = 1;
    }, 400);
};

img5.onmouseout = () => {
    img5.style.opacity = 0;

    setTimeout(() => {
        img5.src = "img-roupa/c59782cb-1978-4fe8-bb5f-2c3688a3648c.jfif";
        img5.style.opacity = 1;
    }, 400);
};
const img6 = document.querySelector(".foto6");

img6.onmouseover = () => {
    img6.style.opacity = 0;

    setTimeout(() => {
        img6.src = "foto/foto6.webp";
        img6.style.opacity = 1;
    }, 400);
};

img6.onmouseout = () => {
    img6.style.opacity = 0;

    setTimeout(() => {
        img6.src = "img/Vestido.jpg";
        img6.style.opacity = 1;
    }, 400);
};
const img7 = document.querySelector(".foto7");

img7.onmouseover = () => {
    img7.style.opacity = 0;

    setTimeout(() => {
        img7.src = "foto/foto7.jpeg";
        img7.style.opacity = 1;
    }, 400);
};

img7.onmouseout = () => {
    img7.style.opacity = 0;

    setTimeout(() => {
        img7.src = "img/CalçaVermelha.jpg";
        img7.style.opacity = 1;
    }, 400);
};
const img8 = document.querySelector(".foto8");

img8.onmouseover = () => {
    img8.style.opacity = 0;

    setTimeout(() => {
        img8.src = "foto/foto8.jpeg";
        img8.style.opacity = 1;
    }, 400);
};

img8.onmouseout = () => {
    img8.style.opacity = 0;

    setTimeout(() => {
        img8.src = "foto/Imagem do WhatsApp de 2025-11-25 à(s) 21.34.25_693300ba.jpg";
        img8.style.opacity = 1;
    }, 400);
};
