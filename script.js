// 1. Gerar numero aleatorio
const numeroSecreto = Math.floor(Math.random() * 100 + 1);

// 2. Controlar o num de tentativas do usuario
/* Variaveis */
let tentativas = 0;
const maxTentativas = 10;

// 3. Vinculo HTML
const chuteInput = document.getElementById("chuteInput");
const chuteBotao = document.getElementById("chuteBotao");
const menssagem = document.getElementById("menssagem");
const alertaTentativas = document.getElementById("alertaTentativas");

// 4. Mostra num de tentativas
alertaTentativas.textContent = `Tentativas restantes: ${
  maxTentativas - tentativas
}`;

// 5. Função para quando clicar no botão chute
function chutarNumero() {
  console.log("OK");
}

// 6. Vinculo botão com a função
chuteBotao.addEventListener("click", chutarNumero);
