let tempo = parseInt(prompt("Digite o tempo (em horas) total da viagem:"))
let velocidadeMedia = parseInt(prompt("Digite a velocidade média na viagem:"))

let distancia = tempo * velocidadeMedia
let litrosUsados = distancia / 12

document.getElementById('demo').innerText = "Tempo de viagem: " + tempo + "h \n Velocidade média: " + velocidadeMedia + "km/h \n Distância total percorrida: " + distancia + "km \n Litros de gasolina usados: " + litrosUsados.toFixed(2)
