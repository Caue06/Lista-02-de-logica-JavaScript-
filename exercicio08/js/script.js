//Faça um programa que receba o salário de um funcionário e exiba o valor do seu bônus. Se o salário for maior que R$ 2000, o bônus é de 10%, caso contrário, é de 5%.

//10/100 * precoProduto


let salario = parseFloat(prompt("Digite o seu salário:"))
let bonus

if (salario > 1999) {
    bonus = 10/100 * salario
    alert("Você recebe um bônus de 10% do seu salário: " + bonus)
}else{
     bonus = 5/100 * salario
    alert("Você recebe um bônus de 5% do seu salário: " + bonus)
}
