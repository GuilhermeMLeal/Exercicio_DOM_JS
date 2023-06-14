
/*var n1 = 8
var n2 = 8
var media = (n1 + n2) / 2

if (media >= 7) {
    console.log("Está aprovado, sua nota foi " + media)
} else if (media >= 5) {
    console.log("Está de recuperação, sua nota foi" + media)
} else {
    console.log("Está retido, sua nota foi " + media)
}
// 1- Mostrar o dia da semana
var data = new Date()
var hora = data.getHours()
var dia = data.getDay();
console.log(dia)
console.log(hora)

switch (dia) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sábado")
        break;
}
// Array 
var diaSemana = ["Dom", "Seg", "Ter", "Quarta", "Quinta", "Sexta", "Sábado"]
console.log(diaSemana[dia])*/

// 2- Mostrar Bom dia, Boa tarde, boa noite

var dataManual = (new Date()).toLocaleTimeString("pt-BR", { timeZone: "America/Sao_paulo" })
//var hora = dataManual.getHours()
console.log(dataManual)

var data = (new Date())
var time = data.getHours()

if (time >= 18) {
    console.log("Boa noite")
}
else if (time>=12 && time<=18) {
    console.log("Boa tarde")
} else if (time < 12 && time > 6){
console.log("Boa tarde")
}