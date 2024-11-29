document.querySelector('#myForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

// Pegar Parametros da URL
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get('id');

// ==================================================
// Modo Editar
if (id) {
    var nome = document.querySelector('#nome');
    var raca = document.querySelector('#raca');
    var idade = document.querySelector('#idade');

    fetch(`${urlServer}${id}`)
    .then(response => response.json())
    .then(data => {
        nome.value = data.nome;
        raca.value = data.raca;
        idade.value = data.idade;
    });

    document.querySelector('#btn-cadastrar').innerHTML = 'Atualizar';
    
    document.querySelector('#btn-cadastrar').onclick = atualizar;
}


function atualizar() {
    var nome = document.querySelector('#nome').value;
    var raca = document.querySelector('#raca').value;
    var idade = document.querySelector('#idade').value;

    var animal = {
        "nome": nome,
        "idade": idade,
        "raca": raca
    };

    fetch(`${urlServer}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animal)
    })
    .then(() => window.location.href = '../index.html');
}

// ==================================================
// Modo Cadastrar
function cadastrar() {
    var nome = document.querySelector('#nome').value;
    var raca = document.querySelector('#raca').value;
    var idade = document.querySelector('#idade').value;

    var animal = {
        "nome": nome,
        "idade": idade,
        "raca": raca
    };

    fetch(`${urlServer}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animal)
    })
    .then(() => window.location.href = '../index.html');

}
