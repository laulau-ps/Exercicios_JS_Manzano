let contadora = 10

while (contadora <= 100) {
    let f = (9 * contadora + 160) / 5
    document.getElementById('demo').innerText += contadora + "º C = " + f + "º F \n"
    contadora += 10
}