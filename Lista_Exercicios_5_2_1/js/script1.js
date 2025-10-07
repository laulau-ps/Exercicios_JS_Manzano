let contadora = 1
let soma = 0

do {
    if (contadora % 2 == 0) {

        //guarda na 'soma' o valor atual dela + o valor atual da contadora
        soma += contadora
    }
    contadora++
} while (contadora <= 500)

document.getElementById('demo').innerText = "Resposta: " + soma