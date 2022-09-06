//conversor moedas
function enviarValorConversor1() {
  const capturarValor1 = document.querySelector("#entradaDeNumeroConversor1")
    .value;
  const valorDolar1 = (5.5 * capturarValor1).toFixed(2);

  const resultadoDolar1 = document.getElementById("respostaConversor1");
  resultadoDolar1.innerHTML = `
    R$ ${valorDolar1}
    `;
  document.querySelector("#entradaDeNumeroConversor1").value = "";
}
//conversor moedas
//conversor distancias
function enviarValorConversor2() {
  const capturarValor2 = document.querySelector("#entradaDeNumeroConversor2")
    .value;
  const valor2 = (9.4607304725808 * capturarValor2).toFixed(2);

  const resultado2 = document.getElementById("respostaConversor2");
  resultado2.innerHTML = `
    ${valor2} x10^12 Km
    `;
  document.querySelector("#entradaDeNumeroConversor2").value = "";
}
//conversor distancias
//Mentalista
let i = 3;
let computer = Math.ceil(Math.random() * 10);
function ValorMentalista() {
  let usuario = parseInt(
    document.querySelector("#entradaDeNumeroMentalista").value
  );
  let dica = usuario / computer;
  i = i - 1;
  let resultado3 = document.getElementById("respostaMentalista");
  if (i > 0) {
    if (computer == usuario) {
      resultado3.innerHTML = `
                Parabens!<br>Mentalista
                `;
      i = "fim";
    } else {
      if (dica > 1) {
        resultado3.innerHTML = `Errou, é menor!<br>
                    Você tem somente ${i} tentativas
                    `;
      } else {
        resultado3.innerHTML = `Errou, é maior!<br>
                    Você tem somente ${i} tentativas
                    `;
      }
    }
  } else if (i == "fim") {
    resultado3.innerHTML = `
            Jogo finalizado
            `;
  } else if (i <= 0) {
    resultado3.innerHTML = `
            Você perdeu!
            `;
  }
  document.querySelector("#entradaDeNumeroMentalista").value = "";
}
//Mentalista
//Calculadora
function calcularValor() {
  const primeiroNumero = parseFloat(
    document.querySelector("#entradanumero1Calculadora").value
  );
  const segundoNumero = parseFloat(
    document.querySelector("#entradanumero2Calculadora").value
  );
  const operador = document.querySelector("#Operadorcalculadora").value;

  let resultaCalculadora = document.getElementById("resultaCalculadora");

  if (operador == "Soma") {
    let somando = primeiroNumero + segundoNumero;
    resultaCalculadora.innerHTML = ` 
    ${primeiroNumero} + ${segundoNumero} = ${somando}
    `;
  } else if (operador == "Subtração") {
    let subtraindo = primeiroNumero - segundoNumero;
    resultaCalculadora.innerHTML = ` 
    ${primeiroNumero} - ${segundoNumero} = ${subtraindo}
    `;
  } else if (operador == "Multiplicação") {
    let multiplicando = primeiroNumero * segundoNumero;
    resultaCalculadora.innerHTML = ` 
    ${primeiroNumero} x ${segundoNumero} = ${multiplicando}
    `;
  } else if (operador == "Divisão") {
    let dividindo = primeiroNumero / segundoNumero;
    resultaCalculadora.innerHTML = ` 
    ${primeiroNumero} / ${segundoNumero} = ${dividindo.toFixed(3)}
    `;
  }
}
//Calculadora
//AluraFlix
const nomefilmes = [
  "Zombieland",
  "Zombieland: Tiro Duplo",
  "Distrito 9",
  "O livro de eli",
  "Chappie",
  "Gambito de Dama"
];
const link = [
  "https://www.imdb.com/title/tt1156398/?ref_=nv_sr_srsg_5",
  "https://www.imdb.com/title/tt1560220/?ref_=rvi_tt",
  "https://www.imdb.com/title/tt1136608/?ref_=nv_sr_srsg_0",
  "https://www.imdb.com/title/tt1037705/?ref_=fn_al_tt_1",
  "https://www.imdb.com/title/tt1823672/?ref_=hm_tpks_tt_i_4_pd_tp1_cp",
  "https://www.imdb.com/title/tt10048342/?ref_=hm_fanfav_tt_i_12_pd_fp1"
];
const thumb = [
  " https://m.media-amazon.com/images/M/MV5BMjM1Njg5Mjg5Nl5BMl5BanBnXkFtZTcwNzc3NjYzOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYjcwNjZhNGYtOGNlNy00NGI3LTlmODMtMGZlMjA3YjA0Njg0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  " https://m.media-amazon.com/images/M/MV5BYmQ5MzFjYWMtMTMwNC00ZGU5LWI3YTQtYzhkMGExNGFlY2Q0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNTE1OWI1YzgtZjEyMy00MjQ4LWE0NWMtYTNhYjc0ZDQ3ZGRkXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTUyNTI4NTIwNl5BMl5BanBnXkFtZTgwMjQ4MTI0NDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg"
];

const catalogofilmes = document.getElementById("conterfilmes");
const ErroInserirFilme = document.getElementById("ErroInserirFilme");
for (var j = 0; j < thumb.length; j++) {
  catalogofilmes.innerHTML += `
    <a target="_blank" target="_blank" class="filmes" href="${link[j]}">
    <img src="${thumb[j]}">
    <h3>${nomefilmes[j]}</h3> 
    </a>
    `;
}
function acrecentarFilmes() {
  const adicionarNome = document.querySelector("#entradaNomeDoFilme").value;
  const adicionarUrl = document.querySelector("#entradaDeUrlImagem").value;
  const adicionarLink = document.querySelector("#entradaLink").value;
  if (
    adicionarNome == "" ||
    adicionarUrl == "" ||
    adicionarLink == "" ||
    (!adicionarUrl.endsWith(".jpg") && !adicionarUrl.endsWith(".png")) ||
    !adicionarLink.startsWith("https:") ||
    !adicionarUrl.startsWith("https:")
  ) {
    ErroInserirFilme.innerHTML = `
        Erro, dados inseridos incorretamente!
        `;
    document.querySelector("#entradaNomeDoFilme").value = "";
    document.querySelector("#entradaDeUrlImagem").value = "";
    document.querySelector("#entradaLink").value = "";
  } else {
    catalogofilmes.innerHTML += `
    <a target="_blank" class="filmes" href="${adicionarLink}">
    <img src="${adicionarUrl}">
    <h3>${adicionarNome}</h3> 
    </a>
    `;
    document.querySelector("#entradaNomeDoFilme").value = "";
    document.querySelector("#entradaDeUrlImagem").value = "";
    document.querySelector("#entradaLink").value = "";
  }
}
//AluraFlix
//Quadro de pontuação
var jogadores = {};
function acrecentarJogador() {
  const add = document.querySelector("#NomeDoJogador").value.substr(0, 10);
  if (jogadores[add]) {
    return;
  }
  jogadores[add] = {
    nome: document.querySelector("#NomeDoJogador").value.substr(0, 10),
    vitoria: 0,
    derrota: 0,
    empate: 0,
    pontuacao: 0
  };
  criartela();
  document.querySelector("#NomeDoJogador").value = "";
}
function acrecentar(add, opcao) {
  jogadores[add][opcao]++;
  jogadores[add].pontuacao =
    3 * jogadores[add].vitoria +
    jogadores[add].empate -
    2 * jogadores[add].derrota;
  criartela();
  return jogadores[add].pontuacao;
}
function criartela() {
  const adicionarNomeJogador = document.getElementById(
    "adicionarJogadoresNaTabela"
  );
  adicionarNomeJogador.innerHTML = `
    <tr>
    <th>Jogador</th>
    <th>Vitorias</th>
    <th>Empates</th>
    <th>Derrotas</th>
    <th>Pontos</th>
    </tr>
    `;
  for (add in jogadores) {
    adicionarNomeJogador.innerHTML += `
    <tr>
    <th> 
    ${jogadores[add].nome} 
    </th>
    <th> 
    ${jogadores[add].vitoria} <button onclick="acrecentar('${add}','vitoria')">+1</button> 
    </th>
    <th> 
    ${jogadores[add].empate} <button onclick="acrecentar('${add}','empate')">+1</button> </th>
    <th> ${jogadores[add].derrota} <button onclick="acrecentar('${add}','derrota')">+1</button> </th>
    <th> ${jogadores[add].pontuacao} </th>
    </tr>
    `;
  }
}
//Quadro de pontuação
//Super Trunfo
const Invoker = {
  nome: "invoker",
  str: 40,
  agi: 40,
  int: 90,
  img: "https://i.imgur.com/JX106R7.jpg"
};
const Centauro = {
  nome: "Centauro",
  str: 90,
  agi: 50,
  int: 30,
  img: "https://i.ytimg.com/vi/i8S_Mtq3taA/maxresdefault.jpg"
};
const WindRunner = {
  nome: "Wind Runner",
  str: 60,
  agi: 80,
  int: 70,
  img: "https://www.dotafire.com/images/social/heroes/windranger.jpg"
};
const OgroMagi = {
  nome: "Ogro Magi",
  str: 80,
  agi: 40,
  int: 80,
  img: "https://www.dotafire.com/images/social/heroes/ogre-magi.jpg"
};
const Magina = {
  nome: "Magina",
  str: 30,
  agi: 90,
  int: 30,
  img: "https://i.ytimg.com/vi/Ged9LAsJtHI/maxresdefault.jpg"
};
const Lina = {
  nome: "Lina",
  str: 40,
  agi: 60,
  int: 85,
  img: "https://www.dotafire.com/images/social/heroes/lina.jpg"
};
const Clock = {
  nome: "Clock",
  str: 75,
  agi: 60,
  int: 50,
  img: "https://www.dotafire.com/images/social/heroes/clockwerk.jpg"
};
const Techies = {
  nome: "Techies",
  str: 30,
  agi: 40,
  int: 99,
  img:
    "https://steamcdn-a.akamaihd.net/apps/570/icons/econ/items/techies/bigshot/bigshot_large.64127577ec813f019df726bf0315f5ced6b4e164.png"
};
const Pudge = {
  nome: "Pudge",
  str: 70,
  agi: 50,
  int: 50,
  img:
    "https://steamcdn-a.akamaihd.net/apps/570/icons/econ/loading_screens/trapper_loading_screen_large.dc30a470921779aed83447d5779f2f5cdc932958.png"
};
const Magnus = {
  nome: "Magnus",
  str: 80,
  agi: 60,
  int: 60,
  img: "https://www.dotafire.com/images/social/heroes/magnus.jpg"
};
const juggernaut = {
  nome: "jugger",
  str: 60,
  agi: 95,
  int: 40,
  img: "https://www.dotafire.com/images/social/heroes/juggernaut.jpg"
};
const Disrrupto = {
  nome: "Disrrupto",
  str: 30,
  agi: 50,
  int: 60,
  img: "https://www.dotafire.com/images/social/heroes/disruptor.jpg"
};
const Tiny = {
  nome: "Tiny",
  str: 70,
  agi: 30,
  int: 60,
  img: "https://www.dotafire.com/images/social/heroes/tiny.jpg"
};
const Jakiro = {
  nome: "Jakiro",
  str: 70,
  agi: 30,
  int: 60,
  img: "https://www.dotafire.com/images/social/heroes/jakiro.jpg"
};
const Medusa = {
  nome: "Medusa",
  str: 70,
  agi: 30,
  int: 60,
  img: "https://www.dotafire.com/images/social/heroes/medusa.jpg"
};
const PhantomLancer = {
  nome: "Phantom",
  str: 35,
  agi: 85,
  int: 30,
  img: "https://www.dotafire.com/images/social/heroes/phantom-lancer.jpg"
};
const ShadowShaman = {
  nome: "Shaman",
  str: 35,
  agi: 35,
  int: 94,
  img: "https://www.dotafire.com/images/social/heroes/shadow-shaman.jpg"
};
const BaralhoCompleto = [
  Invoker,
  Centauro,
  WindRunner,
  OgroMagi,
  Magina,
  Lina,
  Clock,
  Techies,
  Pudge,
  Magnus,
  juggernaut,
  Disrrupto,
  Tiny,
  Medusa,
  PhantomLancer,
  ShadowShaman
];
const nCartas = 8;
const Baralho1 = [];

for (k = 0; k < nCartas; k++) {
  let randomizarCartasdek1 = parseInt(Math.random() * nCartas);
  Baralho1.push(BaralhoCompleto[randomizarCartasdek1]);
  BaralhoCompleto.splice(randomizarCartasdek1, 1);
}
const Baralho2 = BaralhoCompleto;

let NumeroDeCartasUsuario = 0;
let NumeroDeCartasComputador = 0;
let numeroArrayComputador = "";
let numeroArrayUsuario = "";

function IniciarJogo() {
  numeroArrayUsuario = parseInt(Math.random() * Baralho1.length);
  numeroArrayComputador = parseInt(Math.random() * Baralho2.length);

  CardUsuario = Baralho1[numeroArrayUsuario];
  CardComputador = Baralho2[numeroArrayComputador];

  mostrarCartasBaralho1 = document.getElementById("Baralho1");
  mostrarCartasBaralho1.innerHTML = ``;
  for (i = 0; i < Baralho1.length; i++) {
    mostrarCartasBaralho1 = document.getElementById("Baralho1");
    mostrarCartasBaralho1.innerHTML += `
  <section class="CardsBaralho1" style="background-image: url(${Baralho1[i].img}">
            <h2 class="tabelaBaralho1">${Baralho1[i].nome}</h2>
         </section>
  `;
  }

  let mostrarCartaUsuario = document.getElementById("insertcardNovas");
  mostrarCartaUsuario.innerHTML = `
    <!-- Usuario -->
        <section id="cartaUsuario">
        <button class="botaocartas" onclick="JogarSuper()">Desafiar</button>
            <h1>${CardUsuario.nome}</h1>
            <table>
                
            <tr>            
            <td><input type="radio" name="atributoescolhido" value="str" checked></td><td>Força</td>            
            <td>${CardUsuario.str}</td>
            </tr>
            <tr>            
            <td><input type="radio" name="atributoescolhido" value="agi"></td><td>Agilidade</td>            
            <td>${CardUsuario.agi}</td>
            </tr>
            <tr>            
            <td><input type="radio" name="atributoescolhido" value="int"></td><td>Inteligencia</td>            
            <td>${CardUsuario.int}</td>
            </tr>
            </table>
         </section>
         <!-- Usuario -->
         <!-- Computador -->
        <section id="cartaComputador">
            <h2>Computador</h2>
         </section>
         <!-- Computador -->
`;
  let mostrarPontosUsuario = document.getElementById("placarSuper");
  mostrarPontosUsuario.innerHTML = `
    <tr>
        <th>  Jogador </th>
        <th>computador</th>
    </tr>
    <tr>
        <th align="center"><b>${Baralho1.length}</b> cartas</th>
        <th align="center"><b>${Baralho2.length}</b> cartas</th>
    </tr>
`;
  let backgroundUsuario = document.getElementById("cartaUsuario");
  backgroundUsuario.style.backgroundImage = `
url(${CardUsuario.img})
`;
}
if (Baralho1.length > 0) {
  function JogarSuper() {
    let atributoCapturado = "";
    let escolhaAtributoUsuario = document.getElementsByName(
      "atributoescolhido"
    );
    for (var i = 0; i < escolhaAtributoUsuario.length; i++) {
      if (escolhaAtributoUsuario[i].checked) {
        atributoCapturado = escolhaAtributoUsuario[i].value;
      }
    }
    let valorDoAtributoEscolhidoUsuario = CardUsuario[atributoCapturado];
    let valorDoAtributoEscolhidoComputador = CardComputador[atributoCapturado];

    if (
      atributoCapturado != null &&
      atributoCapturado != undefined &&
      atributoCapturado != ""
    ) {
      //Ganhar
      if (
        valorDoAtributoEscolhidoUsuario >= valorDoAtributoEscolhidoComputador
      ) {
        Baralho1.push(CardComputador);
        Baralho2.splice(numeroArrayComputador, 1);

        let mostrarCartaUsuarioEComputador = document.getElementById(
          "insertcardNovas"
        );
        mostrarCartaUsuarioEComputador.innerHTML = `
            <!-- Usuario -->
            <section id="cartaUsuario">
            <button class="botaocartas"  onclick="IniciarJogo()">Novo Jogo!</button> 
            <h4>GANHADOR</h4>                               
            <table>
            <h2>${CardUsuario.nome}</h2>
            <table>
            <tr>
            <td>Força</td><td>${CardUsuario.str}</td>
            </tr>
            <tr>
            <td>Agilidade</td><td>${CardUsuario.agi}</td>
            </tr>
            <tr>
            <td>Inteligencia</td><td>${CardUsuario.int}</td>
            </tr>
            </table>
            </section>
            <!-- Usuario -->
            <!-- Computador -->
            <section id="cartaComputador">
            <h5>PERDEDOR</h5>
            <table>
                <div class="formulario">
                <h2>${CardComputador.nome}</h2>
                <tr>
                <td>Força</td><td>${CardComputador.str}</td>
                </tr>
                <tr>
                <td>Agilidade</td><td>${CardComputador.agi}</td>
                </tr>
                <tr>
                <td>Inteligencia</td><td>${CardComputador.int}</td>
                </tr>
            </table>
            </section>
            <!-- Computador -->
            `;
        NumeroDeCartasUsuario++;
        NumeroDeCartasComputador--;
        let mostrarPontosUsuario = document.getElementById("placarSuper");
        mostrarPontosUsuario.innerHTML = `
                    <tr>
                        <th>  Jogador </th>                        
                        <th>computador</th>
                    </tr>
                    <tr>
                    <th align="center"><b>${Baralho1.length}</b> cartas</th>
                    <th align="center"><b>${Baralho2.length}</b> cartas</th>
                    </tr>

            `;
        let backgroundUsuario2 = document.getElementById("cartaUsuario");
        backgroundUsuario2.style.backgroundImage = `
            url(${CardUsuario.img})
            `;
        let backgroundUsuario3 = document.getElementById("cartaComputador");
        backgroundUsuario3.style.backgroundImage = `
            url(${CardComputador.img})
            `;
      }
      //Peder
      else {
        Baralho2.push(CardUsuario);
        Baralho1.splice(numeroArrayUsuario, 1);
        let mostrarCartaUsuarioEComputador = document.getElementById(
          "insertcardNovas"
        );
        mostrarCartaUsuarioEComputador.innerHTML = `
            <!-- Usuario -->
                <section id="cartaUsuario">
                <button class="botaocartas"  onclick="IniciarJogo()">Novo Jogo!</button> 
                <h5>PERDEDOR</h5>                                 
                    <table>
                    <h2>${CardUsuario.nome}</h2>
                    <tr>
                    <td>Força</td><td>${CardUsuario.str}</td>
                    </tr>
                    <tr>
                    <td>Agilidade</td><td>${CardUsuario.agi}</td>
                    </tr>
                    <tr>
                    <td>Inteligencia</td><td>${CardUsuario.int}</td>
                    </tr>
                    </table>
                </section>
                <!-- Usuario -->
                <!-- Computador -->
                <section id="cartaComputador">
                <h4>GANHADOR</h4>
                    <table>
                        <div class="formulario">
                        <h2>${CardComputador.nome}</h2>
                        <tr>
                        <td>Força</td><td>${CardComputador.str}</td>
                        </tr>
                        <tr>
                        <td>Agilidade</td><td>${CardComputador.agi}</td>
                        </tr>
                        <tr>
                        <td>Inteligencia</td><td>${CardComputador.int}</td>
                        </tr>
                    </table>
                </section>
                <!-- Computador -->
        `;
        NumeroDeCartasComputador++;
        NumeroDeCartasUsuario--;
        let mostrarPontosUsuario = document.getElementById("placarSuper");
        mostrarPontosUsuario.innerHTML = `
                <tr>
                    <th>  Jogador </th>
                    <th>computador</th>
                </tr>
                <tr>
                    <th align="center"><b>${Baralho1.length}</b> cartas</th>
                    <th align="center"><b>${Baralho2.length}</b> cartas</th>
                </tr>
        `;
        let backgroundUsuario2 = document.getElementById("cartaUsuario");
        backgroundUsuario2.style.backgroundImage = `
        url(${CardUsuario.img})
        `;
        let backgroundUsuario3 = document.getElementById("cartaComputador");
        backgroundUsuario3.style.backgroundImage = `
        url(${CardComputador.img})
        `;
      }
    }
    atributoCapturado = null;
  }
}
//Super Trunfo
