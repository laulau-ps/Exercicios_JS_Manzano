let contadora = 15

do {
    quadrado = contadora**2
    document.getElementById('demo').innerText += quadrado + "\n"
    contadora++
} while (contadora <= 200)