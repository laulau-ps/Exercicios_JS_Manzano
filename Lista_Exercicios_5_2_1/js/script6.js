let faixa = 1
let fatorial = 0

do {
    if (faixa % 2 == 1) {
        fatorial = 1
        let calculo = faixa
        while (calculo > 1) {
            fatorial = fatorial * calculo
            calculo = calculo - 1
        }
        console.log(fatorial)
    }
    faixa++
} while (faixa < 10)