



function listaAlunos(){

    var tabela = document.getElementById('tabela');


    fetch('../../data/arquivos json/Aluno.json')
      .then(res => res.json()) // o método .json() faz o parsing da resposta em JSON para um objeto literal em JS
      .then(data => {
    
        const dados = data["Aluno"];

        tablePopulate(dados, tabela);
         

      });

  



}


function tablePopulate(dados, table) {

        var tblBody = document.createElement("tbody");
    
        for (var i = 0; i< dados.length; i++){

            var newRow = document.createElement('tr');
            newRow.insertCell(0).innerHTML = dados[i]['cpf'];
            newRow.insertCell(1).innerHTML = dados[i]['nomeCompleto'];
            newRow.insertCell(2).innerHTML = dados[i]['contato'];
            newRow.insertCell(3).innerHTML = dados[i]['codigoEndereco'];
            table.appendChild(newRow);

        }
       

  }



