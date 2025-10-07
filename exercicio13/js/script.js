//Crie um programa que leia a idade de uma pessoa e seu sexo (M ou F) e exiba uma mensagem indicando se ela pode ou não se aposentar. Homens podem se aposentar com 65 anos ou mais, e mulheres com 60 anos ou mais.

let idade = parseInt(prompt("Digite sua idade:"))
let sexo = prompt("Digite o seu sexo(M ou F):")

if(sexo == "M"){
    if(idade > 65){
        alert("Pode se aposentar.")
    }else{
        alert("Não pode se aposentar.")
    }
}else if(sexo == "F"){
    if (idade > 60) {
        alert("Pode se aposentar.")
    }else{
        alert("Não pode se aposentar.")
    }
}else{
    alert("sexo inválido")
}