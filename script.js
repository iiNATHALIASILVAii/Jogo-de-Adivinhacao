// Gerar numero aleatorio
// o Math.random() gera algo como 0.7538... ent multipliquei pra mover a virgula e virar 75ex
// A função Math.floor() arredonda o número para o inteiro mais próximo pra baixo
// ate aqui geraria uma faixa entre 0 e 99 ent add 1 pra garantir o intervalo certo
// const numeroSecreto = Math.floor(Math.random() * 100 + 1);

// Controlar o num de tentativas do usuario
/* Variaveis */
let numeroSecreto = 0;
let tentativas = 0;
const maxTentativas = 10;

// Vinculo HTML
const chuteInput = document.getElementById("chuteInput");
const chuteBotao = document.getElementById("chuteBotao");
const menssagem = document.getElementById("menssagem");
const alertaTentativas = document.getElementById("alertaTentativas");
const novoJogoBotao = document.getElementById("novoJogoBotao");

// função pra iniciar/ reiniciar o jogo
function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100 + 1);

  // reseta o contador
  tentativas = 0;

  // limpa msg da tela
  menssagem.textContent = "";

  // atualiza o display de tentativas
  alertaTentativas.textContent = `Tentativas restantes: ${
    maxTentativas - tentativas
  }`;

  // reabilita input e botao
  chuteInput.disabled = false;
  chuteBotao.disabled = false;

  // limpa input c chama o foco no box
  chuteInput.value = "";
  chuteInput.focus();
}

// Chama a função do novo jogo
iniciarJogo();

// Função para quando clicar no botão chute
// 1. armazenar o palpite do jogador
// 2. validar se o chute é valido
// 3. comparar com o numeroSecreto
// 4. retorna aletaTentativas pro jogador
// 5. atualizar o num de tentativas restantes
function chutarNumero() {
  const palpite = parseInt(chuteInput.value); // converte a string do input pra numero inteiro

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    // validação dentro do intervalo permitido
    menssagem.textContent = "Ahhh não, digite um numero entre 1 e 100 na moral.";
    return; // encerra a função se o palpite for invalido
  }

  // jogador acertou
  if (palpite === numeroSecreto) {
    // Se o jogador acertar mensagem feliz
    menssagem.textContent = "Parabéns! vc é o bixão mesmo em!";
    chuteInput.disabled = true; // desabilita input
    chuteBotao.disabled = true; // desabilita botão
  }

  // jogador errou mas ainda tem chance
  else {
    tentativas++; // incrementa o contador de tentativas do cara
    if (tentativas < maxTentativas) {
      if (palpite < numeroSecreto) {
        menssagem.textContent = "Vish, o número misterioso é maior em.";
      } else {
        menssagem.textContent = "Eita calma, o numero misterioso é menor.";
      }
      alertaTentativas.textContent = `Tentativas restantes: ${
        maxTentativas - tentativas
      }`;
      chuteInput.value = ""; // limpa o input
      chuteInput.focus(); // coloca o cursor no box do input
    }
    // jogador errou e acabou as chances
    else {
      menssagem.textContent = `Já perdeu no argumento! o número misterioso era ${numeroSecreto}.`;
      alertaTentativas.textContent = `Tentativas restantes: 0`;
      chuteInput.disabled = true; // desabilita input
      chuteBotao.disabled = true; // desabilita botão
    }
  }
}

// Vinculo botão com a função chutarNumero()
chuteBotao.addEventListener("click", chutarNumero);

// Vinculo botão com a função novoJogo()
novoJogoBotao.addEventListener("click", iniciarJogo);
