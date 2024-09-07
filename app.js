function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");


    let campoPesquisa = document.getElementById ("campo-pesquisa").value

//se campoPesquisa for uma string sem nada
if(campoPesquisa == "") {
    section.innerHTML= "<p>Nada foi encontrado. Você precisa digitar o nome algum doce ou ingrediente</p>"
return
}

campoPesquisa = campoPesquisa .toLowerCase()



    console.log(campoPesquisa); // Loga o elemento HTML no console para verificação
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || 
        descricao.includes(campoPesquisa) || 
        tags.includes(campoPesquisa)) { 
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="${dado.link}" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
            </div>
            `;
        }
        

      // Constrói o HTML para cada resultado
      
      
    }
  if(!resultados)
    {resultados = "<p>Nada foi encontrado</p>"}
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }
  
  // console.log(dados); // Descomente esta linha para visualizar o conteúdo de 'dados' no console