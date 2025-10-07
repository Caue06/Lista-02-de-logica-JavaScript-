//Crie um programa que leia o número de maçãs compradas e exiba o valor total a ser pago. O preço das maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12.

let quantidadeMacas = parseInt(prompt("Digite a quantidade de maçãs compradas:"))

if(quantidadeMacas >= 12){
    alert("Preço total a ser pago pelas maçãs: R$" + (quantidadeMacas * 0.40).toFixed(2))
}else{
    alert("Preço total a ser pago pelas maçãs: R$" + (quantidadeMacas * 0.50).toFixed(2))
}