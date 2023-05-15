

var isMenuHidden = 0;



// config-page
function showConfigPage() {
    var loaded = 0;
    window.varIsConfigPageOn = 1;
    const pageStart = document.querySelector('#config-page-wrapper');

    setTimeout(function () {
        $('#config-page').css({
            opacity: '1',
        });
    }, 1);

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

    setTimeout(function () {
        $('#config-page-content').css({
            opacity: '1',
        });
        $('#config-page-leave').on('click', function () {
            hideConfigPage();
            loaded = 0;
        });
    }, 1000);


};
function hideConfigPage() {


    const pageEnd = document.querySelector('#config-page-wrapper');

    $('#config-page-content').css({
        opacity: '0',
    });

    setTimeout(function () {
        $('#config-page').css({
            opacity: '0',
        });
        setTimeout(function () {
            pageEnd.innerHTML = ``;
        }, 500);
        window.varIsConfigPageOn = 0;
    }, 1000);
}


// login page
function showLoginPage() {
    window.isLoginPageOn = 1;
    $('#login-page-outer-wrapper').css({
        display: 'block',
    });
    let div = document.querySelector('#login-page-outer-wrapper');

    div.innerHTML += `
    <div id="login-page-inner-wrapper">
        <div id="login-form">
            <h1 id="login-title">INSCREVA-SE</h1>
            <div id="loguin-form-content">
            <h6 id="input-title">Nome do usuário:</h6>
                <input type="text" placeholder="NickName">
                <h6 id="input-title">Usuário:</h6>
                <input type="text" placeholder="Email">
                <h6 id="input-title">Senha:</h6>
                <input type="text" placeholder="*********">
                <h6 id="input-title">Confirmar senha:</h6>
                <input type="text" placeholder="*********">
            </div>
            <p id="login-signup-button">Já tem uma conta? Entrar</p>
            <div id="save-button">
                <h4 style="margin: 0;">REGISTRAR</h4>
            </div>
        </div>
    </div>`;

    $('#login-signup-button').on('click', slideToLogin);
    $('#save-button').on('click', hideLoginPage);
}
function slideToLogin() {
    $('#login-page-inner-wrapper').css({
        left: "50%",
    });
    $('#login-form').css({
        opacity: '0',
    });
    let div = document.querySelector('#login-form');
    setTimeout(function () {
        div.innerHTML = `
        <h1 id="login-title">Seja bem vindo!</h1>
        <div id="loguin-form-content">
            <h6 id="input-title">Usuário:</h6>
            <input type="text" placeholder="Email">
            <h6 id="input-title">Senha:</h6>
            <input type="text" placeholder="*********">
        </div>
        <p id="login-signup-button">Não tem uma conta? Registrar</p>
        <div id="save-button">
            <h4 style="margin: 0;">ENTRAR</h4>
        </div>`;
        setTimeout(function () {
            $('#login-form').css({
                opacity: '1',
            });
        }, 600);
        $('#login-signup-button').on('click', slideToSignUp);
        $('#save-button').on('click', hideLoginPage);
    }, 200);

}
function slideToSignUp() {
    $('#login-page-inner-wrapper').css({
        left: "-50px",
    });
    $('#login-form').css({
        opacity: '0',
    });
    let div = document.querySelector('#login-form');
    setTimeout(function () {
        div.innerHTML = `
        <h1 id="login-title">INSCREVA-SE</h1>
        <div id="loguin-form-content">
            <h6 id="input-title">Usuário:</h6>
            <input type="text" placeholder="Email">
            <h6 id="input-title">Senha:</h6>
            <input type="text" placeholder="*********">
            <h6 id="input-title">Confirmar senha:</h6>
            <input type="text" placeholder="*********">
        </div>
        <p id="login-signup-button">Já tem uma conta? Entrar</p>
        <div id="save-button">
            <h4 style="margin: 0;">REGISTRAR</h4>
        </div>`;
        setTimeout(function () {
            $('#login-form').css({
                opacity: '1',
            });
            $('#login-signup-button').on('click', slideToLogin);
            $('#save-button').on('click', hideLoginPage);
        }, 600);
    }, 200);
}
function hideLoginPage() {
    let div = document.querySelector('#login-page-outer-wrapper');
    $('#login-page-outer-wrapper').css({
        display: 'none',
    });
    div.innerHTML = ``;
    window.isLoginPageOn = 0;
}

// pomodoro

//inicialização das constantes (selecionando os elementos criados no html pelo queryselector)
const minutesEL = document.querySelector("#minutes"); //seleciona um elemento HTML com o id "minutes" e armazena-o em uma constante chamada minutesEL
const secondsEL = document.querySelector("#seconds");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const resume = document.querySelector("#resume");
const reset = document.querySelector("#reset");
const descansoC = document.querySelector("#descansoCurto");
const descansoL = document.querySelector("#descansoLongo");


let minutes = 25;
let seconds = 0;
let isPaused = false;
let interval;
minutesEL.textContent = formatTime(minutes);
secondsEL.textContent = formatTime(seconds);


start.addEventListener("click", startTimer); //Funcionar o click do botao iniciar
pause.addEventListener("click", pauseTimer); //Funcionar o click do botao pusar
resume.addEventListener("click", resumeTimer); //Funcionar o click do botao continuar
reset.addEventListener("click", resetTimer); //Funcionar o click do botao resetar
descansoC.addEventListener("click", descansoCurto); //Funcionar o click do botao descanso curto
descansoL.addEventListener("click", descansoLongo); //Funcionar o click do botao descanso longo

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            seconds -= 1;
            if (seconds <= 0) {
                minutes--;
                seconds = 59;
            }

            if (minutes === 0 && seconds === 0) { //se chegar em 0 minutos reseta o timer 
                clearInterval(interval);
                resumeTimer();
            }
            minutesEL.textContent = formatTime(minutes);
            secondsEL.textContent = formatTime(seconds);
        }
    }, 1000);
    start.style.display = "none"; //esconder o botao de start depois de inciar
    pause.style.display = "block"; //aparece o botao de pausar 
}

function pauseTimer() {
    isPaused = true;
    pause.style.display = "none"; //quando pausa desaparece o botao de pause
    resume.style.display = "block";//aparece o botao de continuar
}

function resumeTimer() {
    isPaused = false;
    pause.style.display = "block"; //aparece o botao de pause novamente
    resume.style.display = "none";//some o botao de cotinuar
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; //quando timer for menor que 10 vai ficar com um 0 antes.
}

function resetTimer() {
    clearInterval(interval);//fazer o intervalo parar de existir para nao contar mais os numeros
    minutes = 25; //zerando as variaveis
    seconds = 0;

    minutesEL.textContent = "25"; //zerando os conteudos visuais (textuais)
    secondsEL.textContent = "00";

    start.style.display = "block"; //voltar pra como era antes(tudo 00 e botao iniciar pronto)
    pause.style.display = "none";
    resume.style.display = "none";
}

function descansoLongo() {
    clearInterval(interval);//fazer o intervalo parar de existir para nao contar mais os numeros
    minutes = 10;
    seconds = 0;

    minutesEL.textContent = "10"; //zerando os conteudos visuais (textuais)
    secondsEL.textContent = "00";

    start.style.display = "block"; //voltar pra como era antes(tudo 00 e botao iniciar pronto)
    pause.style.display = "none";
    resume.style.display = "none";

}

function descansoCurto() {
    clearInterval(interval);//fazer o intervalo parar de existir para nao contar mais os numeros
    minutes = 5;
    seconds = 0;

    minutesEL.textContent = "05"; //zerando os conteudos visuais (textuais)
    secondsEL.textContent = "00";

    start.style.display = "block"; //voltar pra como era antes(tudo 00 e botao iniciar pronto)
    pause.style.display = "none";
    resume.style.display = "none";

}


var buttonToggle = document.querySelector('#togglePomodoro')
var pomodoro = document.querySelector('#pomodoro')

buttonToggle.addEventListener('click', function () {

});
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



