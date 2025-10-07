let fatorial = 0
let antecessor = 0
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        fatorial = 1
        antecessor = i
        while (antecessor > 1) {
            fatorial *= antecessor
            antecessor -= 1
        }
        document.getElementById('demo').innerText += i + "! = " + fatorial + "\n"
    }

}