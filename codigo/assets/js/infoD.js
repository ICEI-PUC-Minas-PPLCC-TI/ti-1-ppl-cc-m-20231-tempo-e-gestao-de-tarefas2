

window.onload = function () {

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
      <section class="sonosono">
      <section class="paraesq">
      <section class="divx">
        <h3 class="x">X</h3>
      </section>
      </section>

      <ul>
      <li>Saúde física: O sono adequado fortalece o sistema imunológico, previne doenças e regula o peso corporal.</li>
      <li>Saúde mental: Uma boa noite de sono melhora o humor, a concentração e reduz o risco de problemas de saúde mental.</li>
      <li>Desempenho cognitivo: O sono adequado melhora a memória, a criatividade e o raciocínio, maximizando o desempenho intelectual.</li>
    </ul>

      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
        </style>
      `;
    $('h3').on('click', hide);
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
    $('#saude-mental').on('click', carlos);
    $('#exercicios-fisicos').on('click', lorena);
  }

  // F O C O <--

  function jorge() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="sonosono">
      <section class="paraesq">
      <section class="divx">
        <h3 class="x">X</h3>
      </section>
      </section>

      <ul>
      <li>Saúqeqgeggico, previne doenças e regula o peso corporal.</li>
      <li>qgeqegqração e reduz o risco de problemas de saúde mental.</li>
      <li>Desempenho cognitivo: sgsgag.</li>
    </ul>

      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
        </style>
      `;
    $('h3').on('click', hide);
  }
  document.querySelector('#foco').addEventListener('click', jorge);
 
  

  // A G U A <--

  function rommel() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="sonosono">
      <section class="paraesq">
      <section class="divx">
        <h3 class="x">X</h3>
      </section>
      </section>

      <ul>
      <li>asfgsagag</li>
      <li>qgeqegqração e reduz o risco de problemas de saúde mental.</li>
      <li>Desempenho cognitivo: sgsgag.</li>
    </ul>

      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
        </style>
      `;
    $('h3').on('click', hide);
  }
  document.querySelector('#agua').addEventListener('click', rommel);



  // V I C I O S <--

  function carlos() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="sonosono">
      <section class="paraesq">
      <section class="divx">
        <h3 class="x">X</h3>
      </section>
      </section>

      <ul>
      <li>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</li>
      <li>bbbbbbbbbbbbbbbbb</li>
      <li>Desempenho cognitivo: sgsgag.</li>
    </ul>

      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
        </style>
      `;
    $('h3').on('click', hide);
  }
  document.querySelector('#vicios').addEventListener('click', carlos);




  // M E N T A L  <--

  function rammus() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="sonosono">
      <section class="paraesq">
      <section class="divx">
        <h3 class="x">X</h3>
      </section>
      </section>

      <ul>
      <li>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</li>
      <li>bbbbbbbbbbbbbbbbb</li>
      <li>Desempenho cognitivo: sgsgag.</li>
    </ul>

      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
        </style>
      `;
    $('h3').on('click', hide);
  }
  document.querySelector('#saude-mental').addEventListener('click', rammus);



  // G Y M  <--

  function lorena() {
    $('.inf-conjunto-container').css("background-color", "#333333");
    infContainer.innerHTML = ` 
      <section class="sonosono">
      <section class="paraesq">
      <section class="divx">
        <h3 class="x">X</h3>
      </section>
      </section>

      <ul>
      <li>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</li>
      <li>bbbbbbbbbbbbbbbbb</li>
      <li>Desempenho cognitivo: sgsgag.</li>
    </ul>

      </section>

        <style>
        .inf-conjunto-container:hover > :not(:hover){
          opacity: 1;
          transform: scale(1);
      }
        </style>
      `;
    $('h3').on('click', hide);
  }
  document.querySelector('#exercicios-fisicos').addEventListener('click', lorena);






















}


