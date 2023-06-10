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