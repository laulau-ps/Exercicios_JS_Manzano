//declara as variaveis
let contadora = 1
let soma = 0

// enquanto contadora for menor ou igual a 100, 'soma' recebe 'soma' + 'contadora'
while (contadora <=100) {
    soma = contadora + soma
    contadora = contadora + 1
}

//exibe no console e no html
console.log(soma)
document.getElementById('demo').innerText = soma