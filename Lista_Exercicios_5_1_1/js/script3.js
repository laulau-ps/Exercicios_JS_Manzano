let contadora = 0
let resultado = ""

while (contadora <= 20) {
    if (contadora % 2 == 1) {
        resultado += contadora + "\n"
    }

    //maneira de criar o acréscimo
    contadora++
}

document.getElementById('demo').innerText = resultado 