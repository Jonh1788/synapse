var tempoMinimo = 3*60*1000;
var meuBotao = document.getElementById("btn");
var paragrafo = document.getElementById("timeout");
var ultimoPressionamento = localStorage.getItem("ultimo-pressionamento");

if (ultimoPressionamento !== null) {
    var tempoDecorrido = Date.now() - Number(ultimoPressionamento);
    if (tempoDecorrido < tempoMinimo) {
      // Desabilitar o botão se ainda não tiver passado tempo suficiente
      meuBotao.disabled = true;
      paragrafo.classList.remove("sumir");
      
      // Agendar a reativação do botão após o tempo mínimo
      setTimeout(function() {
        meuBotao.disabled = false;
        paragrafo.classList.add("sumir");
      }, tempoMinimo - tempoDecorrido);
    }
  }

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

function iniciar(){

  localStorage.setItem("ultimo-pressionamento", Date.now());
  meuBotao.disabled = true;
  

  setTimeout(function() 
  { meuBotao.disabled = false;
    paragrafo.classList.add("sumir");
    }, tempoMinimo);

    paragrafo1 = document.getElementById('iaBusca');
    carregar = document.getElementById('carregar');

    contadorMinas = document.getElementById('contadorDeMinas');
    contadorTentativas = document.getElementById('contadorDeTentativas');
    atencao = document.getElementById('atencao');
    link = document.getElementById('link');

    paragrafo1.classList.remove("sumir");
    carregar.classList.remove("sumir");

    setTimeout(function(){

        paragrafo.classList.remove('sumir')
        contadorMinas.classList.remove('sumir');
        contadorTentativas.classList.remove('sumir');
        atencao.classList.remove('sumir');
        carregar.classList.remove('c-loader')
        carregar.classList.add('sumir');
        carregar.classList.add('c-loader');
        link.classList.remove('sumir')
        paragrafo1.classList.add("sumir");
        var listaDeEle = document.getElementsByClassName('grid-item');
        var listaEm = shuffle(listaDeEle);
    
        var imagemY = "/static/javascript/bomba.svg";
        var imagemX = "/static/javascript/diamante.svg"
    
        var vezesImagemX = 5;
        var contadorImagemX = 0;
        var contador = listaDeEle.length;
        var array = [];
        for (var i = 0; i < 25; i++) {
            array.push(i); // Adiciona o valor de i ao final do array
          }

        array = shuffle(array);  

        for(let i = 0; i < listaEm.length; i++)
        {
       
            listaEm[i].classList.remove('sumir');
            var primeiroFilho = listaEm[i].querySelector("img:first-child");
            if(primeiroFilho != null)
            {
                primeiroFilho.remove();
            }
    
        }

        for(let i = 0; i < listaEm.length; i++)
        {
            var imagem = document.createElement("img");
    
            if(contadorImagemX < vezesImagemX)
            {
               imagem.src = imagemX;
               contadorImagemX++;
            }else
            {
                imagem.src = imagemY;
            }
    
            listaEm[array[i]].appendChild(imagem);
    
        }

    }, 2000)

}