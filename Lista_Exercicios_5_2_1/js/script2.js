let contadora = 1

do {

    //realiza a condição
    if (contadora % 4 == 0) {

        //exibe o resultado no html
        document.getElementById('demo').innerText += contadora + "\n"
    }

    //incrementa
    contadora++
    
} while (contadora < 200)