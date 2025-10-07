let base = parseInt(prompt("Digite a base:"))
let expoente = parseInt(prompt("Digite o expoente:"))
let contadora = 1
let potencia = 1

//enquanto 'contadora' for menor ou igual ao 'expoente' 
while (contadora <= expoente) {
    potencia *= base
    contadora++
}

document.getElementById('demo').innerText = base + "^" + expoente + " = " + potencia