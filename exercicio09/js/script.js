//Escreva um programa que leia o nome de um mês e exiba a quantidade de dias que ele possui. Considere apenas meses válidos.

let mesDigitado = prompt("Digite um mês para ver quantos dias ele tem:")

switch (mesDigitado) {
    case mesDigitado = "janeiro":
        alert("Janeiro tem 31 dias")
        break;
    case mesDigitado = "fevereiro":
        alert("Fevereiro tem 29 dias")
        break;
    case mesDigitado = "março":
        alert("Março tem 31 dias")
        break;
    case mesDigitado = "abril":
        alert("Abril tem 30 dias")
        break;
    case mesDigitado = "maio":
        alert("31")
        break;
    case mesDigitado = "junho":
        alert("30")
        break;
    case mesDigitado = "julho":
        alert("31")
        break;
    case mesDigitado = "agosto":
        alert("30")
        break;
    case mesDigitado = "setembro":
        alert("31")
        break;
    case mesDigitado = "outubro":
        alert("30")
        break;
    case mesDigitado = "novembro":
        alert("31")
        break;
    case mesDigitado = "dezembro":
        alert("30")
        break;
    default:
        break;
}

