let soma = 0
let contadora = 1

//entra no laço
while (contadora <= 500) {

    //se a condição for verdadeira, faz a soma
    if (contadora % 2 == 0) {
        soma = soma + contadora
    }
    contadora = contadora + 1
}
document.getElementById('demo').innerText = soma