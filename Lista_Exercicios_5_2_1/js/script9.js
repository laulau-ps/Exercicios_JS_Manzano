let dividendo = parseInt(prompt("Digite o dividendo:"))
let divisor = parseInt(prompt("Digite o divisor:"))
let quociente = 1

do {
    
    dividendo = dividendo - divisor
    quociente++
} while (dividendo > divisor)

    console.log(quociente)
