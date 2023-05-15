

var isMenuHidden = 0;



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
        <div class="op50animation "id="config-page-leave">
            <img id="a" src="./assets/img/cruz.png" alt="Sair">
        </div>
        <p>OLÁ USUÁRIO</p>
        
    </header>
    <input type="checkbox" name="change-theme" id="change-theme">
        <label for="change-theme">
            <i class="bi bi-sun"></i>
            <i class="bi bi-moon"></i>
        </label>
    <div id="config-itens-wrapper">
        <ul>
            <li class="config-item op50animation" id="tema">
                <h3>Tema</h3>
                <div class="config-item-content">
                    <p>Escolha entre tema claro e escuro</p>
                </div>
            </li>
            <li class="config-item op50animation" id="background">
                <h3>Background</h3>
                <div class="config-item-content">
                    <p>Defina o background como cor, gradiente ou imagem</p>
                </div>
            </li>
            <li class="config-item op50animation">a</li>
            <li class="config-item op50animation">a</li>
            <li class="config-item op50animation">a</li>
            <li class="config-item op50animation">a</li>
        </ul>
    </div>
    `;
    
    $('#tema').hover(function () {
        $('#tema .config-item-content').css({
            opacity: '1',
        });

    }, function () {
        $('#tema .config-item-content').css({
            opacity: '0',
        });
    });
    $('#background').hover(function () {
        $('#background .config-item-content').css({
            opacity: '1',
        });

    }, function () {
        $('#background .config-item-content').css({
            opacity: '0',
        });
    });
    
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

// login page
function showLoginPage (){
    let body = document.querySelector('body');
    body.innerHTML += ``;
}
function slideToLogin () {
    $('#login-page-inner-wrapper').css({
        left: "50%",
    });
    $('#login-form').css({
        opacity: '0',
    });
    setTimeout(function(){
        $('#login-form').css({
            opacity: '1',
            AnimationName: 'none',
        });
        let div = document.querySelector('#login-form');
        
        setTimeout(function(){
            $('#login-form').css({
                opacity: '1',
            });
        },200);
    },200);
}


//CODIGO TEXTO Q DIGITA SOZINHO

/*const el = document.querySelector('#text');
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
*/


