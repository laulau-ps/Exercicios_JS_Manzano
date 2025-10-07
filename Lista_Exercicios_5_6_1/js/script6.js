let potencia = 1
for (let i = 0; i <= 15; i++) {
    document.getElementById('demo').innerText += "3^" + i + " = " + potencia + "\n"
    potencia = potencia * 3
}