let contadora = 50
let soma = 0
let pares = 0

while (contadora <=70) {
    if (contadora % 2 == 0){
        soma += contadora
        pares += 1
        console.log(soma)
    }
    contadora++
}

document.getElementById('demo').innerText = soma + "\n "+ (soma / pares)