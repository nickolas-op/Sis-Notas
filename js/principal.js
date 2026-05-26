//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Melecas";
var quimicu = document.querySelector(".titulo");
quimicu.textContent = "Dr. Quimicu Nutrição";

//acessar a tag  <TR>  dos melecas
var pacientes = document.querySelectorAll(".meleca");

for(var i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];


    //seleciona o PESO do meleca
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //seleciona a ALTURA do meleca
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o IMC do meleca
    var imc = peso / (altura * altura);

        //variáveis com valor TRUE
        var pesoValido = true;
        var alturaValida = true;

    //condicionais
    if(pesoValido && alturaValida){
     var tdIMC = paciente.querySelector(".info-imc");
     tdIMC.textContent = imc.toFixed(2);
    }
    if(peso <= 0 || peso >= 1000){
     pesoValido = false;
     console.log("Peso inválido");
     tdIMC.textContent = "Peso Inválido";
     paciente.classList.add("campo-invalido");
    }
    if(altura <= 0 || altura >= 3.00){
     alturaValida = false;
     console.log("alto demais, seu muco");
     tdAltura.textContent = "Peso Inválido";
    }
}

//QUANDO CLICAR NO TÍTULO, APARECE UMA MENSAGEM
quimicu.addEventListener('click', mostraMensagem);

function mostraMensagem(){
    alert("Eu amo comer raspa de parede");
}

//Acessa o Botão
var botaoAdicionar = document.querySelector("#adicionar-paciente")
//Executa os Códigos ao Clicar no Botão
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
     //Acessa o Formulario
     var formulario = document.querySelector("#form-adiciona");

     //Captura os Valores Digitados
     var nome = formulario.nome.value;
     var peso = formulario.peso.value;
     var altura = formulario.altura.value;
     var gordura = formulario.altura.value;
     //Cria a Nova Tag <tr>
     var pacienteTr = document.createElement("tr");


     nomeTd.textContent = nome;
     pesoTd.textContent = peso;
     alturaTd.textContent = altura;
     gorduraTd.textContent = gordura;
     imcTd.textContent = imc;   

     
     //variável para acessar tdBody
     var tabela = document.querySelector("#tabela-pacientes");
     tabela.appendChild(pacienteTr);

});
