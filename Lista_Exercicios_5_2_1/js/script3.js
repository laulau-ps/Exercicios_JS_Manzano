let contadora = 1
let soma = 0
let grao = 1

do {
    //soma os grãos
    soma = soma + grao

    //multiplica os grãos por quadro
    grao = grao * 2
    contadora++
} while (contadora < 65)

//exibe
document.getElementById('demo').innerText = "A quantidade total de grãos é: " + soma