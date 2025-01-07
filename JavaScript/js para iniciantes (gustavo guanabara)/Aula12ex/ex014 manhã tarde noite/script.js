function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.` 
    
    if(hora >= 0 && hora < 12){
        //bomdia
        foto.src = 'manhã.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <=18){
        //boa tarde
       foto.src =  'Tarde.png'
       document.body.style.background = '#b9846f'
    } else {
        //boa noite
        foto.src = 'noite.png'
        document.body.style.background = ' rgba(17, 17, 91, 0.822)'
    }
}
