function listaAnimais() {
    let lista = document.querySelector("#lista");
    lista.innerHTML = "";
    
    fetch(urlServer)
        .then(response => response.json())
        .then(data => {
            data.forEach(animal => {
                let li = document.createElement("li");
                let a = document.createElement("a");
                let button = document.createElement("button");

                button.innerHTML = "Excluir";
                button.classList.add("btn-excluir");
                button.onclick = () => {
                    fetch(`${urlServer}${animal.id}`, {
                        method: "DELETE"
                    })
                    .then(() => listaAnimais());
                }   

                a.innerHTML = ` ${animal.nome} (${animal.idade}) - ${animal.raca}`;
                a.href = `cadastrar/cadastrar.html?id=${animal.id}`;
                a.classList.add("linkAnimal");

                li.appendChild(button);
                li.appendChild(a);
                   
                lista.appendChild(li);
            })
        })
}

listaAnimais();