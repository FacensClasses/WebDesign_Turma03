document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

let loginElement = document.querySelector('#login');
let senhaElement = document.querySelector('#senha');

if (localStorage.getItem("login") && localStorage.getItem("senha")) {
    login.value = localStorage.getItem("login");
    senha.value = localStorage.getItem("senha");

    console.log('login', login.value);
}

function validaLogin() {
    let login = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;

    if (login === 'admin' && senha === 'admin') {
        localStorage.setItem("login", login);
        localStorage.setItem("senha", senha);

        window.location.href = 'home.html';
    }
    else {
        document.querySelector('.loginInvalid').innerHTML = 'Login ou senha inválidos!';
    }
}