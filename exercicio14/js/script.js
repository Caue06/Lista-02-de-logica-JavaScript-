let altura = parseFloat(prompt("Digite a sua altura:"))
let peso = parseFloat(prompt("Digite o seu peso em quilos:"))

let imc = peso / (altura * altura)

if (imc <= 18.5) {
    alert("Baixo Peso")
}else if(imc > 18.5 && imc <= 24.9){
    alert("Peso Normal")
}else if(imc > 24.9 && imc <= 29.9){
    alert("Sobre Peso")
}else  if(imc > 29.9 && imc <= 34.9){
    alert("Obesidade Grau I")
}else if(imc > 34.9 && imc <= 39.9){
    alert("Obesidade Grau II")
}else{
    alert("Obesidade Grau III")
}