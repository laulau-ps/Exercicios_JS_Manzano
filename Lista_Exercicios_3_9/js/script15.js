let validosA = parseInt(prompt("Digite a quantidade de votos válidos para o candidato A:"))

let validosB = parseInt(prompt("Digite a quantidade de votos válidos para o candidato B:"))

let validosC = parseInt(prompt("Digite a quantidade de votos válidos para o candidato C:"))

let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos:"))

let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos:"))

let totalEleitores = validosA + validosB + validosC + votosBrancos + votosNulos

let percentualValidos = (validosA + validosB + validosC) / totalEleitores * 100

let percentualBrancos = votosBrancos / totalEleitores * 100

let percentualNulos = votosNulos / totalEleitores * 100

let percentualValidosA = validosA / totalEleitores * 100

let percentualValidosB = validosB / totalEleitores * 100

let percentualValidosC = validosC / totalEleitores * 100

document.getElementById('demo').innerText = "Resultado da eleição: \n" +
    "Número total de eleitores: " + totalEleitores +
    "\n Percentual de votos válidos: " + percentualValidos +
    "% \n Percentual de votos brancos: " + percentualBrancos +
    "% \n Percentual de votos nulos: " + percentualNulos +
    "% \n Percentual de votos candidato A: " + percentualValidosA +
    "% \n Percentual de votos candidato B: " + percentualValidosB +
    "% \n Percentual de votos candidato C: " + percentualValidosC + "%"
