let proximoTermo = 1
let termoAtual = 1
let termoAnterior = 1

for (let i = 1; i <= 15; i++) {
    proximoTermo = termoAtual + termoAnterior
    
    document.getElementById('demo').innerText = termoAnterior

    termoAnterior = termoAtual
    termoAtual = proximoTermo
}

