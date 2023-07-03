const ADDcalcDiv = document.querySelector("#CalculadoraAddBTN");
const calculadoraModulo = document.querySelector("#calculadora-modulo");
const fecharcalculadoramoduloid = document.querySelector("#fechar-calculadora-modulo-id")

const botaocalccm = document.querySelector("#botao-calc-cm")
const botaocalcidade = document.querySelector("#botao-calc-idade")

const botaoresetcm = document.querySelector("#botao-reset-cm")
const botaoresetidade = document.querySelector("#botao-reset-idade")

ADDcalcDiv.addEventListener("click", function(){

    calculadoraModulo.style.display = "block";
    console.log("click")
});

//FECHAR MODULO
fecharcalculadoramoduloid.addEventListener("click", function(){
    calculadoraModulo.style.display = "none";
})

const calcresultado = document.querySelector("#calc-resultado")
const calcresultadocaloria = document.querySelector("#calc-resultado-caloria")
const numeroInput = document.querySelector("#numero-input");
const alturaInput = document.querySelector("#altura-input")
const idadeInput = document.querySelector("#idade-input")

const botaoEnviar = document.querySelector("#botao-calc-calcular");
const botaoresetar = document.querySelector("#botao-calc-resetar");

botaoEnviar.addEventListener("click", function() {
  numeroInput.disabled = true;
});

botaoresetar.addEventListener("click", function(){
    calcresultado.innerHTML = ""
    numeroInput.disabled = false;
})


botaocalccm.addEventListener("click", function(){
  alturaInput.disabled = true;
})
botaoresetcm.addEventListener("click", function(){
  alturaInput.disabled = false;
})

botaocalcidade.addEventListener("click", function(){
  idadeInput.disabled = true;
})
botaoresetidade.addEventListener("click", function(){
  idadeInput.disabled = false;
})

const calcularTudo = document.querySelector("#calcularTudo")


calcularTudo.addEventListener("click", function(){
  
  const peso = parseFloat(numeroInput.value); 
  var qntAgua = (peso * 35)/1000;
  var qntAgua2 = (peso * 60)/1000;
  //QUANTIDADE DE AGUA
  calcresultado.innerHTML =  `${"De "}` + qntAgua + `${" a "}` + qntAgua2 +  `${"    Litros"}`

  const altura = parseFloat(alturaInput.value);
  const idade = parseFloat(idadeInput.value);


  const generoSelect = document.querySelector("#genero");
  const valorSelecionado = generoSelect.value;
  generoSelect.addEventListener("change", function() {
    const valorSelecionado = generoSelect.value;
  });

  if(valorSelecionado === "homem"){
    var metBasal = 66+(13.7*peso)+(5.0*altura)-(6.8*idade);
    console.log(metBasal)
  }else if(valorSelecionado === "mulher"){
    var metBasal = 665+(9.6*peso)+(1.8*altura)-(4.7*idade);
    console.log(metBasal)
  }
  calcresultadocaloria.innerHTML =  metBasal +  `${" Kcal"}`
})