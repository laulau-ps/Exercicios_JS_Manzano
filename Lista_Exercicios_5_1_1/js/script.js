let numero = parseInt(prompt("Digite um número maior que zero:"))
let contadora = 1
let multiplicacao = " "

while (contadora <= 10) {
    /* Versão no console
        //exibe no console o valor do 'numero' e 'contadora', depois exibe o resultado da multiplicação, feita direto na linha do console.log
        console.log(numero + " x "+ contadora + " = " + numero*contadora)
    
        //acréscimo
        contadora = contadora + 1*/

    // Versão exibida no html

    //concatena a tag 'multiplicacao' recebendo o calculo
    multiplicacao += (numero + " x " + contadora + " = " + numero * contadora + "\n")
    contadora = contadora + 1
}

//exibe a tag 'multiplicacao' 
document.getElementById('demo').innerText = multiplicacao