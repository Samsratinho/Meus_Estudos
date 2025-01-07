function verificar(){
    var v1 = document.getElementById('txtn1')
    var v2 = document.getElementById('txtn2')
    var v3 = document.getElementById('txtn3')
    var contagem = document. getElementById('res')

    var inicio = Number(v1.value);
    var fim = Number(v2.value);
    var passo = Number(v3.value);

    if (v1.value.length == 0 || v2.value.length == 0){
        alert("Dados invalidos. Preencha todos os campos e use um passo maior que o numero 0 ")
    } else {
        contagem.innerHTML = "<p>Contando:</p>"
    }
    
    if(inicio < fim){
    for(var i= inicio; i <= fim; i += passo ){
        contagem.innerHTML += `${i} \u{1F449}`
    }
    } else {
    for(var i= inicio; i >= fim; i -= passo ){
        contagem.innerHTML += `${i}\u{1F449}`
    }
}
contagem.innerHTML += `\u{1F3C1}`;
}