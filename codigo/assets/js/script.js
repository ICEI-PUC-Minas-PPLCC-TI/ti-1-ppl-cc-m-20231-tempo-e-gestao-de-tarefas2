

var isMenuHidden = 0;
var viewportHeight = $(window).height();
var viewportWidth = $(window).width();



//cores

// ----------- funções -----------

// config-page
function showConfigPage () {
    var loaded = 0;
    window.varIsConfigPageOn = 1;
    console.log(window.varIsConfigPageOn);
    const pageStart = document.querySelector('#config-page-wrapper');
    
    setTimeout(function(){
        $('#config-page').css({
            opacity: '1',
        })
    },1);

    pageStart.innerHTML += `
    <div id="config-page">
        <section id="config-page-content"><section>
    </div>`; 

    const configPageContent = document.querySelector('#config-page-content');
    configPageContent.innerHTML += `
    <header>
        <div id="config-page-leave">
            <img id="a" src="./assets/img/cruz.png" alt="Sair">
        </div>
        <p>OLÁ USUÁRIO</p>
        
    </header>
    <div id="config-itens">
        <ul>
            <li id="tema">a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
        </ul>
    </div>
    `;

    setTimeout(function(){
        $('#config-page-content').css({
            opacity: '1',
        });
        $('#config-page-leave').on('click', function(){
            hideConfigPage();
            loaded = 0;
        });
    },1000);

    
};

function hideConfigPage () {
    
    console.log(window.varIsConfigPageOn);
    const pageEnd = document.querySelector('#config-page-wrapper');

    $('#config-page-content').css({
        opacity: '0',
    });

    setTimeout(function(){
        $('#config-page').css({
            opacity: '0',
        });
        setTimeout(function(){
            pageEnd.innerHTML = ``; 
        },500);
        window.varIsConfigPageOn = 0;
    },1000); 
}





