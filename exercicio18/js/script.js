//Crie um programa que leia o nome e o turno (M ou V) de um aluno e exiba uma mensagem de saudação de acordo com o turno. Matutino: "Bom dia, aluno", Vespertino: "Boa tarde, aluno".

let nomeAluno = prompt("Digite o seu Nome:")
let turnoAluno = prompt("Digite o seu turno(M ou V):")

if (turnoAluno == "M") {
    alert("Bom dia, " + nomeAluno + ".")
}else if(turnoAluno == "V"){
    alert("Boa tarde, " + nomeAluno + ".")
}else{
    alert("Turno inválido")
}