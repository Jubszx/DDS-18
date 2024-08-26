/*var alunos = ["Pedro", "Tiago", "João"]
var notas = [7,8,9]

//console.log(alunos[2], "=", notas[2])

//Declarando um objeto
var aluno = {
    nome: "Pedro", nota: 8
}

console.log(aluno.nome)
console.log(aluno.nota)
console.log(aluno.nome, "-", aluno.nota)

// Seleciondo uma propriedade
var pessoa = {
    nome: "Maria",
    idade: 20
}

console.log(pessoa)
console.log(pessoa.nome);
console.log(pessoa["idade"]);

//Adicionando novas propriedades
pessoa.rg ="12345678910"
console.log(pessoa);

pessoa["profissao"] = "Diretora"
console.log(pessoa);

//Adicionando propriedade com uma variável
var novaProp = "sobrenome"
pessoa[novaProp] = "Do Bairro"
console.log(pessoa.sobrenome);


//Criando métodos 
var cachorro =  {
    nome:"Mel",
    raca:"Poodle",
    ande:function(){
        console.log("Passos Passos")
    },
    latir:function(){    
        console.log("Au Au")
        
    }
}

console.log(cachorro.nome)
console.log(cachorro["raca"])
cachorro.latir()
cachorro.ande()




var aluno = {
    nome: "Ju",
    notas: [7 , 6, 8],
    media: function(n1,n2,n3){
        return((n1+n2+n3) / 3)
    }
}


console.log("O nome do aluno é:", aluno.nome)
console.log("Sua média foi:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));


//Método com função externa

function calculaMedia(n1,n2){
    return((n1+n2) / 2)
}

var aluno1 = {
    nome: "Jake",
    notas: [8 , 8,],
    media: calculaMedia
}


var aluno2 = {
    nome: "fin",
    notas: [8 , 9],
    media: calculaMedia
}

console.log("O nome do aluno é:", aluno1.nome)
console.log("Sua média foi:", aluno1.media(aluno1.notas[0], aluno1.notas[1]));

console.log("O nome do aluno é:", aluno2.nome)
console.log("Sua média foi:", aluno2.media(aluno2.notas[0], aluno2.notas[1]));



// uso so this, dentro do próprio objeto
var aluno = {
    nome: "Jessy",
    notas: [10, 6],
    media: function(){
        return ((this.notas[0]+this.notas[1]/2))
    }
}

console.log(aluno.media())
*/

// uso so this, fora do próprio objeto
function calculaMediaRetorno(){
    return((this.notas[0] + this.notas[1] / 2))
}
var aluno1 = {
    nome: "Jessy",
    notas: [5, 6],
    media: calculaMediaRetorno
}

var aluno2 = {
    nome: "Hannah",
    notas: [4, 8],
    media: calculaMediaRetorno
}

console.log(aluno1.media())
console.log(aluno2.media())