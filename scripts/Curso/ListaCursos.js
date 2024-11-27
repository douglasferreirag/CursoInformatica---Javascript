



function listaCursos(){

    var tabela = document.getElementById('tabela');


    fetch('../../data/arquivos json/Curso.json')
      .then(res => res.json()) // o método .json() faz o parsing da resposta em JSON para um objeto literal em JS
      .then(data => {
    
        const dados = data["Curso"];

        tablePopulate(dados, tabela);
         

      });

  



}


function tablePopulate(dados, table) {

        var tblBody = document.createElement("tbody");
    
        for (var i = 0; i< dados.length; i++){

            var newRow = document.createElement('tr');
            newRow.insertCell(0).innerHTML = dados[i]['codigo'];
            newRow.insertCell(1).innerHTML = dados[i]['descricao'];
            newRow.insertCell(2).innerHTML = dados[i]['modulo'];
            table.appendChild(newRow);

        }
       

  }



