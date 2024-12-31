function calcular(){
    let n1 = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    

    if(n1.value.length == 0){
        alert('[ERRO] Insira um valor valido')
    } else{
        let v1 = Number(n1.value);
        tab.innerHTML = ''

        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text =  `${v1} x ${i} = ${v1 * i}`
            tab.appendChild(item)
        }
    }
}
