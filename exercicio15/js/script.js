//Escreva um programa que leia o nome e a nota de um aluno e exiba sua situação na disciplina. Se a nota for maior ou igual a 7, o aluno está aprovado. Caso contrário, está em recuperação.

let nome = prompt("Digite o nome do aluno:")
let nota = parseInt(prompt("Digiite a nota do aluno:"))

if(nota >= 7){
    alert("O " + nome + " foi aprovado.")
}else{
    alert("O " + nome + " foi reprovado.")
}