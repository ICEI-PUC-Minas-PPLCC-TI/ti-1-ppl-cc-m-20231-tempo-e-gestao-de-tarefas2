var isMenuHidden = 0;
var viewportHeight = $(window).height();
var viewportWidth = $(window).width();



//cores

// ----------- funções -----------

// config-page
function showConfigPage () {
    isConfigPageOn = 1;
    console.log(isConfigPageOn);
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
    
     <ul>
         <li id="tema">a</li>
         <li>a</li>
         <li>a</li>
         <li>a</li>
         <li>a</li>
         <li>a</li>
     </ul>
    `;

    setTimeout(function(){
       $('#config-page-content').css({
            opacity: '1',
        });
    },1000);
};
function hideConfigPage () {
    isConfigPageOn = 0;
    console.log(isConfigPageOn);
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
        },3000);
    },1000); 
}



//CODIGO TEXTO Q DIGITA SOZINHO

const el = document.querySelector('#text');
const text = "1 melhor cada dia!";
const interval = 200;

function showText(el,text,interval){
    const char = text.split("").reverse();
    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }
        const next = char.pop();

        el.innerHTML += next;

    },interval);
}

showText(el,text,interval);


