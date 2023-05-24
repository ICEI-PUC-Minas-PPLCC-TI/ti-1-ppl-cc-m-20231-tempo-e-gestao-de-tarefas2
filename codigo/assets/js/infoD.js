

window.onload = function () {

  var infoDjson = JSON.parse('[{"frase1": "Um adulto deve dormir entre 7 - 9 horas por noite.","frase2": "Um vício é um comportamento que continu asendo executado mesmo na presença de uma punição.","frase3": "Um vício geralmente é atrelado a um gatilho [pessoa, ambiente, lugares e épocas].","frase4": "TODO MUNDO sonha todas as noites. Voce só nao vai sonhar se não passar pela fase de sono REM.", "frase5": "Conhecimento é poder.","frase6": "Apenas começe. Apenas faça.","frase7": "Se exponha a luz solar de manha, isso irá ajudar na qualidade do seu sono anoite.","fraseoito": "Cerca de apenas 5% da populaço.","frase8": "Cerca de apenas 5% da população mundial tem Transtorno de Défit de Atenção.","frase9": "Pessoas que tem INSÔNIA crônica tem atrofia no hipocampo, região do cérebro envolvida com formação de memória.","frase10": "Nossos comportamentos são modulados pelo nosso ambiente.","frase11": "Somos sensíveis as consequências dos nossos comportamento.","frase12": "Manter-se adequadamente hidratado com água pode melhorar a concentração, o foco e o desempenho mental.","frase13": "Nossa musculatura é naturalmente composta por cerca de 80% de agua. Portanto, se hidrate ao longo do dia.","frase14": "Temos que beber no MÍNIMO 35 ml de agua por kg corporal","frase15": "Depressão e ansiedade são transtornos mentais que diminuem a produtividade do individuo.","frase16": "Fazer exercícios físicos melhoram suas funções cognitivas.","frase17": "Um dos principais motivos da procastinação é a busca do perfeiccionismo.","frase18": "Descansar também é fundamental para hipertrofia!","frase19": "Busque sua melhor vesão.","frase20": "Sua atenção é controlada por uma região no seu cérebro conhecida como cortéx pré frontal."}]');

function exibirTextoAleatorio() {
  var randomIndex = Math.floor(Math.random() * Object.keys(infoDjson[0]).length);
  var randomKey = Object.keys(infoDjson[0])[randomIndex];

  infoDjson.forEach(function (passa) {
    document.querySelector(".text_da_tip").innerHTML += '<p class="reoo">' + passa[randomKey] + "</p>";
  });

  const ten = document.querySelector(".reoo");
  escreve(ten);
}

function escreve(elementoooo) {
  const textoArrayyy = elementoooo.innerHTML.split("");
  elementoooo.innerHTML = "";
  textoArrayyy.forEach((letraa, i) => {
    setTimeout(function () {
      elementoooo.innerHTML += letraa;
    }, 100 * i);
  });
}

exibirTextoAleatorio(); // Chama a função pela primeira vez

setInterval(function () {
  document.querySelector(".text_da_tip").innerHTML = ""; // Limpa o conteúdo anterior
  exibirTextoAleatorio(); // Chama a função novamente
}, 20000); // 6 segundos de atraso (6000 milissegundos)






/*
  var infoDjson = JSON.parse(
    '[{"frase1": "Um adulto deve dormir entre 7 - 9 horas por noite.","frase2": "Um vício é um comportamento que continu asendo executado mesmo na presença de uma punição.","frase3": "Um vício geralmente é atrelado a um gatilho [pessoa, ambiente, lugares e épocas].","frase4": "TODO MUNDO sonha todas as noites. Voce só nao vai sonhar se não passar pela fase de sono REM.", "frase5": "Conhecimento é poder.","frase6": "Apenas começe. Apenas faça.","frase7": "Se exponha a luz solar de manha, isso irá ajudar na qualidade do seu sono anoite.","fraseoito": "Cerca de apenas 5% da populaço.","frase8": "Cerca de apenas 5% da população mundial tem Transtorno de Défit de Atenção.","frase9": "Pessoas que tem INSÔNIA crônica tem atrofia no hipocampo, região do cérebro envolvida com formação de memória.","frase10": "Nossos comportamentos são modulados pelo nosso ambiente.","frase11": "Somos sensíveis as consequências dos nossos comportamento.","frase12": "Manter-se adequadamente hidratado com água pode melhorar a concentração, o foco e o desempenho mental.","frase13": "Nossa musculatura é naturalmente composta por cerca de 80% de agua. Portanto, se hidrate ao longo do dia.","frase14": "Temos que beber no MÍNIMO 35 ml de agua por kg corporal","frase15": "Depressão e ansiedade são transtornos mentais que diminuem a produtividade do individuo.","frase16": "Fazer exercícios físicos melhoram suas funções cognitivas.","frase17": "Um dos principais motivos da procastinação é a busca do perfeiccionismo.","frase18": "Descansar também é fundamental para hipertrofia!","frase19": "Busque sua melhor vesão.","frase20": "Sua atenção é controlada por uma região no seu cérebro conhecida como cortéx pré frontal."}]'
  );

  var randomIndex = Math.floor(
    Math.random() * Object.keys(infoDjson[0]).length
  ); // escolhe um índice aleatório
  var randomKey = Object.keys(infoDjson[0])[randomIndex]; // obtém a chave correspondente ao índice aleatório

  infoDjson.forEach(function (passa) {
    document.querySelector(".text_da_tip").innerHTML +=
      '<p class="reoo">' +
      passa[randomKey] +
      "</p>";
  });

  function escreve(elementoooo) {
    const textoArrayyy = elementoooo.innerHTML.split("");
    elementoooo.innerHTML = "";
    textoArrayyy.forEach((letraa, i) => {
      setTimeout(function () {
        elementoooo.innerHTML += letraa;
      }, 100 * i);
    });
  }
  const ten = document.querySelector(".reoo");


  escreve(ten);
  */

  /*
  // Seleciona a div filha com a classe .sono
  const sonoDiv = document.querySelector('#sono');

  // Seleciona a div pai usando parentNode e muda sua cor de fundo
  const parentDiv = sonoDiv.parentNode;
  const elPai = document.querySelector('.inf-conjunto-container');
  */

  /*
  sonoDiv.addEventListener('click', function() {
      parentDiv.style.backgroundColor = 'lightgrey';
      parentDiv.style.height = '300px';
    
      // Criando uma div para envolver a lista ul
      var divLista = document.createElement('div');
      divLista.classList.add('divLista'); // Adicionando a classe à div
    
      // Criando um botão de fechamento
      var closeButton = document.createElement('button');
      closeButton.textContent = 'X';
      closeButton.classList.add('close-button'); // Adicionando uma classe ao botão
    
      // Adicionando o evento de clique para fechar a div
      closeButton.addEventListener('click', function() {
        divLista.remove(); // Removendo a div do elemento pai
      });
    
      // Criando uma lista ul
      var ul = document.createElement('ul');
      ul.classList.add('divLista'); // Adicionando uma classe à lista ul
    
      // Criando itens li para a lista
      var li1 = document.createElement('li');
      li1.textContent = 'Item 1';
    
      var li2 = document.createElement('li');
      li2.textContent = 'Item 2';
    
      var li3 = document.createElement('li');
      li3.textContent = 'Item 3';
    
      // Adicionando os itens à lista ul
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
    
      // Adicionando o botão de fechamento antes da lista ul
      divLista.appendChild(closeButton);
      divLista.appendChild(ul);
    
      // Substituindo o conteúdo da div pai pela div que envolve a lista ul
      elPai.innerHTML = '';
      elPai.appendChild(divLista);



      // Seleciona a div pai usando parentNode e muda sua cor de fundo
  const parentDiv = itemm.parentNode;
  const elPai = document.querySelector('.inf-conjunto-container');
   // Seleciona a div filha com a classe .sono
    });*/

  const infContainer = document.querySelector('.inf-conjunto-container');

  function roger() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="quadrado">
      <section class="paraesq">
      <section class="divx">
        <h4 class="x">X</h4>
      </section>
      </section>

      <ul>
      <li><strong>Sono Ideal:</strong> Um adulto deve dormir entre 7-9 horas e passar por todos os ciclos do sono.</li>
      <li><strong>Benefícios:</strong> Um sono de qualidade limpa a adenosina do cérebro, molécula responsável pela fadiga.</li>
      <li><strong>Desempenho cognitivo:</strong> O sono adequado melhora a memória, a criatividade e o raciocínio, maximizando o desempenho intelectual.</li>
      <li>É durante o sono que ocorre a <strong>neuroplaticidade</strong>, processo fisiológico em que os neuronios conseguem criar novas conexoes sinápticas.</li>
    </ul>

      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
        .inf-conjunto-container{
          padding: 0;
        }
        </style>
      `;
    $('h4').on('click', hide);
  }
  document.querySelector('#sono').addEventListener('click', roger);
  //itemm.addEventListener('click', roger);
  function hide() {
    $('.inf-conjunto-container').css("background-color", "white");
    infContainer.innerHTML = `
      <div class="informante" id="sono">
      <div class="informante-titulo">
        <h2 id="titulo10">SONO</h2>
      </div>
    </div>

    <div class="informante" id="foco">
      <div class="informante-titulo">
        <h2 id="titulo10">FOCO</h2>
      </div>
    </div>
    <div class="informante" id="agua">
      <div class="informante-titulo">
        <h2 id="titulo10">AGUA</h2>
      </div>
    </div>
    <div class="informante" id="vicios">
      <div class="informante-titulo">
        <h2 id="titulo10">VICIOS</h2>
      </div>
    </div>
    <div class="informante" id="saude-mental">
      <div class="informante-titulo">
        <h2 id="titulo10">MENTAL</h2>
      </div>
    </div>
    <div class="informante" id="exercicios-fisicos">
      <div class="informante-titulo">
        <h2 id="titulo10">GYM</h2>
      </div>
    </div>
      `;
    $('#sono').on('click', roger);
    $('#foco').on('click', jorge);
    $('#agua').on('click', rommel);
    $('#vicios').on('click', carlos);
    $('#saude-mental').on('click', rammus);
    $('#exercicios-fisicos').on('click', lorena);
  }

  // F O C O <--

  function jorge() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="quadrado">
      <section class="paraesq">
      <section class="divx">
        <h4 class="x">X</h4>
      </section>
      </section>

      <ul>
      <li><strong>Córtex pré-frontal:</strong> Região importante para a manutenao da atencao.        <a href="https://www.youtube.com/watch?v=G7WLXoPWQjs" target="_blank">https://www.youtube.com/watch?v=G7WLXoPWQjs</a></li>
      <li>Devido a liberacao de <a href="https://www.youtube.com/watch?v=plfnROQzBXY" target="_blank"><strong>dopamina</strong></a> maneira mais fácil e eficiente para <strong>conseguir prestar atencao</strong> em algo é estando <strong>motivado</strong>/gostando de executar este comportamento.</li>
      <li>O <a href="https://www.youtube.com/watch?v=G7WLXoPWQjs" target="_blank"><strong>Pomodoro</strong></a>, ferramenta imbutida no própio Chronos, é uma <strong>técnica de gestão de tempo</strong> que envolve trabalhar em intervalos de tempo focados, seguidos por pausas curtas. Sendo uma excelente técnica para aumentar o foco.</li>
    </ul>

      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
      .inf-conjunto-container{
        padding: 0;
      }
        </style>
      `;
    $('h4').on('click', hide);
  }
  document.querySelector('#foco').addEventListener('click', jorge);



  // A G U A <--

  function rommel() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="quadrado">
      <section class="paraesq">
      <section class="divx">
        <h4 class="x">X</h4>
      </section>
      </section>

      <ul>
      <li>Um adulto <strong>deve beber de água</strong> entre <strong>35 a 65 ml por kg corporal</strong>.</li>
      <li>Pessoas <strong>desidratadas</strong> apresentam menor volume de sangue que o normal, o que acaba atrapalhando o funcionamento do <strong>cérebro</strong> (cognição) e <strong>coração</strong>.</li>
      <li>Cerca de <strong>75% do peso de um músculo é composto por água</strong>. Quem busca o ganho de massa magra nao pode pecar na hidratacao.</li>
      <li><a href="https://www.youtube.com/watch?v=qgscCIhugNA" target="_blank">https://www.youtube.com/watch?v=qgscCIhugNA</a></li>
    </ul>
      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
      .inf-conjunto-container{
        padding: 0;
      }
        </style>
      `;
    $('h4').on('click', hide);
  }
  document.querySelector('#agua').addEventListener('click', rommel);



  // V I C I O S <--

  function carlos() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="quadrado">
      <section class="paraesq">
      <section class="divx">
        <h4 class="x">X</h4>
      </section>
      </section>

      <ul>
      <li>O vício é uma <strong>dependência</strong> física e/ou psicológica de substâncias ou comportamentos, com alterações nos <strong>circuitos de recompensa do cérebro</strong>.</li>
      <li>Um vício geralmente está atrelado a um <strong>gatilho</strong> (pessoa, ambiente, lugares e épocas).</li>\
      <li>Para perder um hábito ruim é preciso <strong>mudar de ambiente</strong> (É no ambiente onde estao os gatilhos).</li>
      <li><strong><a href="https://www.youtube.com/watch?v=MMvc3esvCRI" target="_blank">Como trocar vícios RUINS por vícios SAUDÁVEIS</a></strong></li>
    </ul>

      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
      .inf-conjunto-container{
        padding: 0;
      }
        </style>
      `;
    $('h4').on('click', hide);
  }
  document.querySelector('#vicios').addEventListener('click', carlos);




  // M E N T A L  <--

  function rammus() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="quadrado">
      <section class="paraesq">
      <section class="divx">
        <h4 class="x">X</h4>
      </section>
      </section>

      <ul>
      <li><strong>O que é</strong> TDAH?: O Transtorno de Défit de Atencao e hiperatividade é uma doença <strong>crônica</strong> que inclui <strong>dificuldade de atenção, hiperatividade e impulsividade</strong>.</li>
      <li>O <strong><a href="https://www.youtube.com/watch?v=HMW0oOXA2ww" target="_blank">TDAH</a></strong> é um transtorno que atinge cerca de 3 a 5% da populacao mundial.</li>
      <li>A <strong><a href="https://www.youtube.com/watch?v=ZnDHYQ6kKNo" target="_blank">depressao</a></strong> e a <strong><a href="https://www.youtube.com/watch?v=OAT1imQ05bU" target="_blank">ansiedade</a></strong> sao transtornos mentais comuns que afetam drásticamente a qualidade de vida e a <strong>produtividade</strong> do individuo.</li>
    </ul>

    <!--
    <ul>
      <li>O <strong><a href="https://www.youtube.com/watch?v=HMW0oOXA2ww" target="_blank">TDAH</a></strong> é um transtorno que atinge cerca de <strong>3 a 5% da populacao mundial</strong>.</li>
      <li>A <strong><a href="https://www.youtube.com/watch?v=ZnDHYQ6kKNo" target="_blank">depressao</a></strong> e a <strong><a href="https://www.youtube.com/watch?v=OAT1imQ05bU" target="_blank">ansiedade</a></strong> sao transtornos mentais comuns que afetam drásticamente a qualidade de vida e a <strong>produtividade</strong> do individuo.</li>
      <li>Cerca de <strong>75% do peso de um músculo é composto por água</strong>. Quem busca o ganho de massa magra nao pode pecar na hidratacao.</li>
      <li><a href="https://www.youtube.com/watch?v=qgscCIhugNA" target="_blank">https://www.youtube.com/watch?v=qgscCIhugNA</a></li>
    </ul>
    -->
      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
      .inf-conjunto-container{
        padding: 0;
      }
        </style>
      `;
    $('h4').on('click', hide);
  }
  document.querySelector('#saude-mental').addEventListener('click', rammus);



  // G Y M  <--

  function lorena() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="quadrado">
      <section class="paraesq">
      <section class="divx">
        <h4 class="x">X</h4>
      </section>
      </section>

      <ul>
      <li>Atividades físicas melhoram o <strong>desempenho cognitivo, qualidade de sono, condicionamento muscular e reduzem o estresse</strong> (além de aumentar a sencacao de bem-estar).</li>
      <li>Práticar exercícios físicos tambem podem se tornar um vício, basta condicionar a adequadamente a recompensa desse comportamento.</li>
      <li><a href="https://www.youtube.com/watch?v=sjH9jBd68yE" target="_blank">https://www.youtube.com/watch?v=sjH9jBd68yE</a></li>
      <li>Confira a <strong>playlist</strong> de <strong>TREINO</strong> da Chronos: <a href="https://open.spotify.com/playlist/0TjWhwCALXzTHu6Guqg1BR?si=8d2f9a6be1e74c66" target="_blank">https://open.spotify.com/playlist/0TjWhwCALXzTHu6Guqg1BR?si=8d2f9a6be1e74c66</a></li>
    </ul>

      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
      .inf-conjunto-container{
        padding: 0;
      }
        </style>
      `;
    $('h4').on('click', hide);
  }
  document.querySelector('#exercicios-fisicos').addEventListener('click', lorena);






















}


