let contadora = 0
let potencia = 1

while (contadora < 16) {
    document.getElementById('demo').innerText += "3^"+contadora+" = "+potencia + "\n"

    potencia = potencia * 3
    contadora++
}