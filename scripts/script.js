function calculaNotaBimestre(notaProjetoA, notaProjetoB, notaBimestre){

  

    notaBimestre.value = Math.round(((parseFloat(notaProjetoA)) * 0.2) + ((parseFloat(notaProjetoB)) * 0.8));

    


}

function calculaMedia(notaBimestreA, notaBimestreB, media){

    media.value = ( (parseFloat(notaBimestreA)) +  (parseFloat(notaBimestreB)) ) / 2;

}