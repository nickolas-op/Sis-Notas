var alunos = document.querySelectorAll(".aluno");

for(var i = 0; i < alunos.length; i++){
    var aluno = alunos[i]; // Boa prática: use 'var' ou 'let' aqui também

    // Seleciona e converte o 1 tri para número decimal
    var tdPrimeTri = aluno.querySelector(".info-1tri");
    var PrimeTri = parseFloat(tdPrimeTri.textContent);

    // Seleciona e converte o 2 tri para número decimal
    var tdSegunTri = aluno.querySelector(".info-2tri");
    var SegunTri = parseFloat(tdSegunTri.textContent);

    // Seleciona e converte o 3 tri para número decimal
    var tdTerceTri = aluno.querySelector(".info-3tri");
    var TerceTri = parseFloat(tdTerceTri.textContent);

    // Agora a conta de soma e divisão funcionará corretamente
    var media = (PrimeTri + SegunTri + TerceTri) / 3;
      
    var PrimeValido = true;
    var SegunValido = true;
    var TerceValido = true;
    var mediaValida = true;

    var tdMedia = aluno.querySelector(".info-media");

    if(PrimeValido && SegunValido && TerceValido){
        // Exibe a média com duas casas decimais
        tdMedia.textContent = media.toFixed(0);
    }

    // Se a média for menor ou igual a 60, altera o texto para reprovado
    if(media <= 60){
        mediaValida = false;
        tdMedia.textContent = "Reprovado";
        aluno.classList.add("campo-invalido");
    }
}