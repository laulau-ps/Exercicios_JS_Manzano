let conversao = 0
for (let i = 10; i <=100; i+=10){
    conversao = (9 * i + 160) / 5
    document.getElementById('demo').innerText += i +"ºC = "+ conversao + "ºF \n"
}