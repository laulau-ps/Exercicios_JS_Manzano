let a = parseInt(prompt("Digite o 1º valor:"))
let b = parseInt(prompt("Digite o 2º valor:"))
let c = parseInt(prompt("Digite o 3º valor:"))

if (a != 0) {
    let delta = b ** 2 - 4 * a * c
    if (delta < 0) {
        document.getElementById("demo").innerText = "Não existem raízes reais para esta equação."
    } else {
        let raiz1 = ((-b) + (delta ** (1 / 2))) / (2 * a)
        let raiz2 = ((-b) - (delta ** (1 / 2))) / (2 * a)
        document.getElementById("demo").innerText = "Raiz 1: " + raiz1 + "\n Raiz 2: " + raiz2
    }
} else {
    document.getElementById("demo").innerText = "O primeiro valor digitado deve ser diferente de 0 para que o cálculo seja executado."
}