//mOSTRA UM ALERTA NA PÁGINA
//alert("OUTRA MENSAGEM")


//CONSOLE
/*
console.log("OLA A MENSAGEM DE NOVO")

var texto = "Taylor Swift"
var numero = 1989
var the_Best = true
var nulo =  null
var indefinido

console.log(typeof(texto))        
console.log(typeof(numero))
console.log( typeof(the_Best))      
console.log(typeof(nulo))              
console.log(typeof(indefinido))
*/

//Operadores
//Aritiméticos: +-/*%
/*
var a = 10
var b = 3

console.log("Soma", a+b)
console.log("Subtração", a-b)
console.log("Multiplicação", a/b)
console.log("Divisão", a*b)
console.log("Módulo", a%b)

//Lógicos: &&, ||, !

var verdade = true
var mentira = false

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

//Relacionais: >, <, >=, <=, ==, !=, ===, !==
var a = 10
var b = 5
var c = "10"

console.log("Relacionais")
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a != b)
console.log(a === c)
console.log(a !== c)
*/

//Condicionais
//IF


/*
var estaVivo 
if(estaVivo == true){
    console.log("Está Vivo");
}
else if(!estaVivo == false){
    console.log("Está Morto");
}
else{
    console.log("Não tá nada");
}

//Switch

var camisa = "Preto"
switch(camisa){
    case "Azul":
        console.log("A camisa é azul")
    break
    
    case "Amarela":
        console.log("A camisa é amarela")
    break
    
    case "Preto":
        console.log("A camisa é preto")
    break
    default:
        console.log("A camisa é sei lá")
    break        
}

*/

//Loops
//For

/*
for(var i = 0; i < 5; i++){
    console.log("Estoy jo");
}
    console.log("Acabou o FOR");


//While

var it = 1
while (it < 10){
    console.log("Estou aqui 2-3 retorno");
    it++
}

*/

//Funções


function teste1(){
    console.log("Estou aqui na função 1");
}

function teste2(){
    console.log("Agora, estou na função 2");
}

teste2()


//Interação com usúario via promt



var numero = prompt("Digite um número:")
var numero2 = prompt("Digite  outro numero:")
var resultado = Number(numero) + Number(numero2)

console.log(resultado)

alert(resultado)


