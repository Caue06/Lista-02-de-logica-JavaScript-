let nome01 = prompt("Digite o primeiro nome:")
let idade01 = parseInt(prompt("Digite a idade do(a) " + nome01))

let nome02 = prompt("Digite o segundo nome:")
let idade02 = parseInt(prompt("Digite a idade do(a) " + nome02))

if(idade01 > idade02){
    alert("O " + nome01 + " é mais velho do que o(a) " + nome02 )
}else{
    alert("O " + nome02 + " é mais velho do que o(a) " + nome01 )
}