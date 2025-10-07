let numero = parseInt(prompt("Digite um número:"))

for (let contadora = 1; contadora <= 10; contadora++) {
    //exibe e realiza o calcula na mesma linha de codigo
    document.getElementById("demo").innerText += numero + " x " + contadora + " = " + (numero * contadora) + "\n"
}