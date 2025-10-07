let contadora = 1
let proximoTermo = 0
let termoAtual = 0
let termoAnterior = 1

while (contadora <= 15){
    proximoTermo = termoAnterior + termoAtual
    termoAtual = termoAnterior
    termoAnterior = proximoTermo
    document.getElementById('demo').innerText += termoAtual + "\n"
    contadora++
}