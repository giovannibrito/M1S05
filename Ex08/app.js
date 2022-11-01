class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    autenticar(emailInformado, senhaInformada) {
        return this.email === emailInformado && this.senha === senhaInformada;
    }
}

const giovanni = new Usuario("Giovanni", "giovannileonibrito@bol.com.br", "teste123");
const botao = document.querySelector(".btn-login");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const main = document.querySelector("main");
const mensagem = document.querySelector(".mensagem-login");
console.log(mensagem);

botao.addEventListener("click", (event) => {
    event.preventDefault();
    giovanni.autenticar(email.value, senha.value) ? sucesso() : invalido();
});

function invalido() {
    mensagem.innerText = "Credenciais inválidas";
}

function sucesso() {
    main.innerHTML = "<p>Login efetuado com sucesso</p>";
    main.style.fontSize = "30px";
}
