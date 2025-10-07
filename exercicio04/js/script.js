let idadeDigitada = parseInt(prompt("Digita a sua idade:"))

if(idadeDigitada < 12){
    alert("Você é uma criança.")
}else if(idadeDigitada >= 12 && idadeDigitada < 18){
    alert("Você é um adolescente.")
}else if(idadeDigitada >= 18 && idadeDigitada < 60){
    alert("Você é um adulto.")
}else if(idadeDigitada > 60){
    alert("Você é um idoso")
}