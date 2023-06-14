//Desafio 01
var idade = Number.parseInt(window.prompt("Digite sua idade:"))
/*if (idade >= 18) {
    window.alert("Está liberado!")
}
else {
    window.alert("Você está bloqueado")
}*/
window.alert(idade>=18?"Acesso Liberado!":"Acesso Negado!")
window.alert(`O usuário tem ${idade} anos`)


//Desafio 02
var numero = Number.parseInt(window.prompt("Me fale um numero e descubra se é par ou ímpar"))
/*var resultado = numero / 2
if(resultado%0){
    window.alert("O numero é par")
}
else{
    window.alert("O número é ímpar")
}*/
window.alert(numero*2<0?"É par":"É ímpar")


/*var nome = window.prompt("Digite seu nome:")
var idade = window.prompt("Digite sua idade:")
window.alert("Bem-Vindo " + nome + " " + idade)

var n1 = Number(window.prompt("Fala um numero aí:"))
var n2 = Number(window.prompt("Fala outro:"))
var result = n1 + n2
window.alert("O resultado da soma é " + result)*/