let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let ConfirmSenha = document.querySelector('#ConfirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false



nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome <strong>(*Insira no minimo 3 caracteres)</strong>'
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green') 
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usario invalido <strong>(*Insira no minimo 5 caracteres)</strong>'
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green') 
        labelUsuario.innerHTML = 'Usuario'
        validUsuario = true
    }
})


senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha Invalida <strong>(*Insira no minimo 6 caracteres)</strong>'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green') 
        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
})

ConfirmSenha.addEventListener('keyup', () => {
    if(senha.value != ConfirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Senha <strong>(*As senhas não conferem)</strong>'
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green') 
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        validConfirmSenha = true
    }
})

function validatorEmail(email) {
    let emailPattern =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }

  function cadastrar() {
    const nomeInput = document.getElementById('nome');
    const usuarioInput = document.getElementById('usuario');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmSenhaInput = document.getElementById('ConfirmSenha');

    const nome = nomeInput.value;
    const usuario = usuarioInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;
    const confirmSenha = confirmSenhaInput.value; 
    

    if (nome === "" || usuario === "" || email === "" || senha === "" || confirmSenha === "") {
        alert('Todos os campos devem ser preenchidos');
    } else if (!validatorEmail(email)) {
        alert('Por favor, insira um endereço de email válido');
    } else {
        alert('Cadastro realizado com sucesso');
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({
            nomeCad: nome,
            userCad: usuario,
            emailCad: email,
            senhaCad: senha,
        });

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        // Limpa os campos após o cadastro
        nomeInput.value = '';
        usuarioInput.value = '';
        emailInput.value = '';
        senhaInput.value = '';
        confirmSenhaInput.value = '';

     // Redireciona para a página index.html
     window.location.href = "../../index.html";
    }
}




btn.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text') 
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', ()=> {
    let inputConfirmSenha = document.querySelector('#ConfirmSenha')

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text') 
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})



