const arryBibilhioteca = [
    a1= { nome: "Love, Death & Robots", url: "LVDTHERBTST"},
    a2= { nome: "American Dad", url: "AMRCDDT"},
    
]

const arryUrlBase = [
    "https://m3u9.cf/RedeCanais/RedeCanais/",
    "https://workstation.canais.ink/RedeCanais/RedeCanais/",
    "http://gabigol.ga:8080/d/RedeCanais/RedeCanais/",
    "http://reded.s3.wasabisys.com/RedeCanais/RedeCanais/",
    "https://d14o9knl5w9rhh.cloudfront.net/RedeCanais/RedeCanais/",
    "https://dg295molxk994.cloudfront.net/RedeCanais/RedeCanais/",
    "https://downloads.cometa.link/RedeCanais/RedeCanais/",
    "https://downloads2.cometa.link/RedeCanais/RedeCanais/",
    "http://dahomeys.ml:8080/d/RedeCanais/RedeCanais/",
    "http://sorvete.ml:8080/d/RedeCanais/RedeCanais/",
    "https://m3u9.cf/RedeCanais/RedeCanais/"
]
const arryUrlMid = [
    "RCServer03/ondemand/",
    "RCServer09/ondemand/",
    "RCServer10/ondemand/"
]
const chave = ""
const baseURL = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImageURL = null;
const APIKEY = "5417af578f487448df0d4932bc0cc1a5";
let qnt = arryBibilhioteca.length;
let inicioQntfilme = 0;
let fimQntfilme = qnt;
let pagcont = 1;

document.getElementById('pagcont').innerHTML = `P. ${pagcont}/${Math.ceil(arryBibilhioteca.length/qnt)}`

function nextPage() {
    if (fimQntfilme < arryBibilhioteca.length) {
        pagcont++
        document.getElementById('pagcont').innerHTML = `P. ${pagcont}/${Math.ceil(arryBibilhioteca.length/qnt)}`
        inicioQntfilme += qnt
        fimQntfilme += qnt
        add()
        if (document.getElementById("conteinerLastview")) {
            const ocutar1 = document.getElementById("conteinerLastview");
            ocutar1.remove();
        }
    }
}

function backPage() {
    if (inicioQntfilme >= qnt) {
        pagcont--
        document.getElementById('pagcont').innerHTML = `P. ${pagcont}/${parseInt(arryBibilhioteca.length/qnt)}`
        inicioQntfilme -= qnt
        fimQntfilme -= qnt
        add()
        if (document.getElementById("conteinerLastview")) {
            const ocutar1 = document.getElementById("conteinerLastview");
            ocutar1.remove();
        }
    }
}
let SeasonNumber = 0

function somarSeason() {
    SeasonNumber++
    Season = document.getElementById('numeroSeason').innerText
    console.log(Season)
    document.getElementById('numeroSeason').innerHTML = SeasonNumber
}

function subtrairSeason() {
    if (SeasonNumber > 1) {
        SeasonNumber--;
        Season = document.getElementById('numeroSeason').innerText;
        console.log(Season);
        document.getElementById('numeroSeason').innerHTML = SeasonNumber;
    }
}
exibirLastView()

function exibirLastView() {
    if (localStorage.lastView != undefined) {
        let nomeLastView = JSON.parse(localStorage.getItem("lastView")).nome
        let URLLastView = JSON.parse(localStorage.getItem("lastView")).url
        let TempLastView = JSON.parse(localStorage.getItem("lastView")).temp
        getConfig()
        
        function getConfig() {
            let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
            fetch(url)
            .then((result) => { return result.json() })
            .then((data) => {
                baseImageURL = data.images.secure_base_url;
                configData = data.images
            })
            .catch(function(err) { document.getElementById('lastView').innerHTML = err; })
        }
        runSearch(nomeLastView)
        
        function runSearch(keyword) {
            let url = ''.concat(baseURL, 'search/tv?api_key=', APIKEY, '&query=', keyword);
            fetch(url)
            .then(result => result.json())
            .then((data) => {
                let resultado = data.results[0]
                if (data.results[0] != null && data.results[0] != undefined) {
                    let poster_path = baseImageURL + "w342" + resultado.poster_path
                    document.getElementById('lv').innerHTML += `
                    <span id="lastView"> 
                    <img id="cardLastView" src="${poster_path}" onclick="start()" nome="${nomeLastView}" value="${URLLastView}" temp="${TempLastView}">
                    </span>
                    `
                }
            })
        }
    }
}
add()

function add() {
    document.getElementById('cards').innerHTML = ""
    for (let h = inicioQntfilme; h < fimQntfilme; h++) {
        let buscarFilme = arryBibilhioteca[h].nome
        let urlVideo = arryBibilhioteca[h].url
        let tempVideo = arryBibilhioteca[h].temp
        getConfig()
        
        function getConfig() {
            let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
            fetch(url)
            .then((result) => { return result.json(); })
            .then((data) => {
                baseImageURL = data.images.secure_base_url;
                configData = data.images;
            })
            .catch(function(err) { document.getElementById('cards').innerHTML = err; });
        }
        runSearch(buscarFilme)
        
        function runSearch(keyword) {
            let url = ''.concat(baseURL, 'search/tv?api_key=', APIKEY, '&query=', keyword);
            fetch(url)
            .then(result => result.json())
            .then((data) => {
                let resultado = data.results[0]
                setTimeout(function() {
                    if (resultado != null && resultado != undefined) {
                        let poster_path = baseImageURL + "w342" + resultado.poster_path
                        document.getElementById('cards').innerHTML += `
                        <img class="cardposter" src="${poster_path}" onclick="start()" nome="${buscarFilme}" value="${urlVideo}" temp="${tempVideo}">
                        `
                    }
                }, 50)
            })
        }
        document.addEventListener('DOMContentLoaded', getConfig);
    }
}
let k = 0;
let b = 0;
let TempValue = 2;
let arryNomeClickado = [];
let arryUrlClickado = [];
let arryTempClickado = [];

function start() {
    if (arryNomeClickado.length < 1) {
        arryNomeClickado.push(String(event.target.getAttribute("nome")))
        arryUrlClickado.push(String(event.target.getAttribute("value")))
        arryTempClickado.push(String(event.target.getAttribute("temp")))
    }
    
    lerInfoSerie()
    
    function lerInfoSerie() {
        //sauvar nome clickado
        if (localStorage[arryNomeClickado] != undefined) {
            //ler k
            k = JSON.parse(localStorage.getItem(arryNomeClickado[0])).kValue                    
        }
        //verificar se foi escolhido alguma temporada manualmente
        if (document.getElementById("numeroSeason")) {
            let TempValue = parseInt(document.getElementById("numeroSeason").innerText)
            if (TempValue != "") {
                if (TempValue > 2) { k = finalEpsodio * (parseInt(TempValue) + 1) } else if (TempValue == 2) { k = finalEpsodio } else if (TempValue == 1) { k = 0 }
            }
        }
        //calcular qual epsodio da temporada
        let calc3 = ((k / finalEpsodio) - parseInt(k / finalEpsodio) + 2) * finalEpsodio
        if (k >= finalEpsodio * 3) { b = parseInt(calc3) } else { b = k }
        //chamar criação arry com epsodio relevantes
    }
    
    criarArry()
}
let urls = [];
let nomes = [];
const iniciarEpsodio = 1;
const finalEpsodio = 25;

function criarArry() {
    urls = [];
    nomes = [];
    if (k <= finalEpsodio * 3) { iniciarTemporada = 1 } else { iniciarTemporada = parseInt(k / finalEpsodio) - 3; }
    if (k <= finalEpsodio * 3) { finalTemporada = 3 } else { finalTemporada = parseInt(k / finalEpsodio) - 1; }
    for (i = iniciarTemporada; i <= finalTemporada; i++) {
        for (j = iniciarEpsodio; j <= finalEpsodio; j++) {
            baixar = arryUrlClickado[0] + "0" + i + "EP0" + j + ".mp4";
            //01EP01.mp4
            urls.push(baixar);
            nome = "S" + i + "-EP" + j;
            nomes.push(nome);
        }
    }
    if (document.getElementById("conteiner")) {
        remover();
    }
    Iniciar()
}

function remover() {
    const ocutar1 = document.getElementById("conteiner");
    ocutar1.remove();
}

function Iniciar() {
    const videosSerie = document.getElementById("exibir");
    videosSerie.innerHTML = ` 
    <div id = "infoEpsodio" >
    <h1> ${ nomes[b] } </h1> 
    <a href = "#" style = "padding: 2px" >
    <h3 onclick = "retroceder()" > ANTERIOR </h3> 
    </a > 
    <a href = "index.html" style = "padding: 2px">
    <h3> HOME </h3> </a> 
    <a href = "#" style = "padding:2px" >
    <h3 onclick = "pular()" > PROXIMO </h3>
    </a > 
    </div>     
    <video class="videos" id="iframe" autoplay controls>
    </video>
    `
    const source = document.getElementById("iframe");
    for(v in arryUrlBase){
        for(w in arryUrlMid){
        source.innerHTML += `
        <source src="${arryUrlBase[v]+arryUrlMid[w]+urls[b]+chave}" type="video/mp4">
        ` 
        console.log(`<source src="${arryUrlBase[v]+arryUrlMid[w]+urls[b]+chave}" type="video/mp4">`)
        }}
    ;
    pulador()
}
let duration = 0
let corrente = 0
let percentua = 0
function pulador(){
    setInterval(() => {
        corrente = document.getElementById('iframe').currentTime
        duration = document.getElementById('iframe').duration
        percentua = parseFloat(((corrente / duration) * 100).toFixed(2))
        console.log(corrente, duration, percentua+"%")
        
        if(percentua>95){
            pular()
        }
    }, 5000);
    
}


function gravarInfocache() {
    let dado = {
        nome: arryNomeClickado[0],
        url: arryUrlClickado[0],
        kValue: k,
        temp: arryTempClickado[0],
    }
    localStorage.setItem("lastView", JSON.stringify(dado))
    localStorage.setItem(arryNomeClickado[0], JSON.stringify(dado));
}

function pular() {
    k++;
    gravarInfocache();
    setTimeout(() => { start(); }, 100);
}

function retroceder() {
    if (k >= 1) {
        k--;
        gravarInfocache();
        setTimeout(() => { start(); }, 100);
    }
}

