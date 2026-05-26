//Acessa o Botão
var botaoAdicionar = document.querySelector("#adicionar-paciente")
//Executa os Códigos ao Clicar no Botão
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
     //Acessa o Formulario
     var formulario = document.querySelector("#form-adiciona");
     var paciente = buscaValoresFormulario(formulario);
     var pacienteTr = criarTR(paciente);

     //variável para acessar tdBody
     var tabela = document.querySelector("#tabela-pacientes");
     tabela.appendChild(pacienteTr);

     formulario.reset();
});


function buscaValoresFormulario(formulario){

    //Captura os Valores Digitados
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularIMC(formulario.peso.value, formulario.altura.value)
    }

    return paciente;
}


function criarTR(paciente){ 

    //Cria a Nova Tag <tr>
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Adiciona as tags na tela do meleca
    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));


    return pacienteTr;
}

function criarTd(dado, classe){
    const td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);

    return td;
}