function mostraSenha() {
  const campo = document.getElementById("senha");
  const botao = document.getElementById("olhoSenha");

  if (campo.type === "password") {
    campo.type = "text";    // mostra senha
    botao.textContent = "🙈"; // troca o ícone
  } else {
    campo.type = "password"; // esconde senha
    botao.textContent = "👁️"; // volta o ícone
  }
}
function mostraSenha2() {
  const campo = document.getElementById("senha2");
  const botao = document.getElementById("olhoSenha2");

  if (campo.type === "password") {
    campo.type = "text";    // mostra senha
    botao.textContent = "🙈"; // troca o ícone
  } else {
    campo.type = "password"; // esconde senha
    botao.textContent = "👁️"; // volta o ícone
  }
}
