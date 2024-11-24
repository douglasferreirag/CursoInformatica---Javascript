function calculaNotaBimestre(notaProjetoA, notaProjetoB, notaBimestre){

  

    notaBimestre.value = Math.round(((parseFloat(notaProjetoA)) * 0.2) + ((parseFloat(notaProjetoB)) * 0.8));

    


}

function calculaMedia(notaBimestreA, notaBimestreB, media, status){

    var resultado = ( (parseFloat(notaBimestreA)) +  (parseFloat(notaBimestreB)) ) / 2;

    media.value = resultado;

    if(resultado > 7.0){

            status.value = "APROVADO";

            status.style.backgroundColor = "blue";

    }
    else{

        status.value = "REPROVADO";

        status.style.backgroundColor = "red";

    }

}

