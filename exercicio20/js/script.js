//Escreva um programa que leia três números inteiros e exiba a média aritmética. Se a média for maior ou igual a 7, exiba a mensagem "Aprovado", caso contrário, exiba a mensagem "Reprovado".

let nota01 = parseFloat(prompt("Digite a primeira nota:"))
let nota02 = parseFloat(prompt("Digite a segunda nota:"))
let nota03 = parseFloat(prompt("Digite a terceira nota:"))

let media = (nota01 + nota02 + nota03) / 3

if(media >= 7){
    alert("Aprovado.")
}else{
    alert("Reprovado.")
}