var isMenuHidden = 0;
var viewportHeight = $(window).height();
var viewportWidth = $(window).width();

//cores
var cor1, cor2, cor3, cor4, cor5;


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


