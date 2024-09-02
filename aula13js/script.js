function logar(){
    var login = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputSenha').value

    if(login == "admin" && senha == "admin"){
        location.href = "home.html"
        alert('Login realizado com sucesso!')
       
    }
    else{
        alert('Usúario ou senha incorretxs')
    }

}


function cadastrar(){
    var usuario = document.getElementById('inputUsuarioNov').value
    var email = document.getElementById('inputEmailNov').value
    var senha = document.getElementById('inputSenhaNov').value
    var senhaConfirmar = document.getElementById('inputSenhaConfir').value

    var emailCerto = emailValido(email)

    if(emailCerto){
        if(senha === senhaConfirmar){
            location.href ="index.html"
            alert("Olá" + usuario + "seja bem vindo!")
        }
        
        else{
        alert('As senhas não coincidem')
        }
    }    
    else{
        alert("Este email não é válido")
    }
}


function emailValido(email){
    return email.includes('@')
}