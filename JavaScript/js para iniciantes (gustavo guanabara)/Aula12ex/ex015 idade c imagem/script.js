function verificar(){
    var data = new Date() //ano do sistema computacional
    var ano = data.getFullYear() //ano em 4 caracteres
    var fano = document.getElementById('txtano')  
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){ //verificar se os dados estão corretos 
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //equeção para aparecer a idade da pessoa
        var genero = '' //crianddo  varivavel para conseguir guardar o nome 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){ //checar a condicional para masculino
            genero = 'Homem'
            if (idade >=0 &&  idade <  10){
                //criança 
                genero = 'um Bebê' //novo nome do genero
                img.setAttribute('src', 'foto-bebe-m.png') //pegar imagem do sistema para o programa nome-img.setAttribute
            } else if (idade < 18){
                //adolecente
                genero = 'um Adolecente'
                img.setAttribute('src', 'foto-adolecente-m.png') 
            } else if (idade < 40){
                //adulto
                genero = 'um Adulto'
                img.setAttribute('src', 'foto-jovem-m.png')
            } else {
                //velinho
                genero = 'um Velhinho'
                img.setAttribute('src', 'foto-velho-m.png')
            }
        } else if (fsex[1].checked){ //checar a condicional para feminino
            genero =  'Mulher'
            if (idade >=0 &&  idade <  10){
                //criança
                genero = 'uma Bebê'
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 18){
                //adolecente
                genero = 'uma Adolecente'
                img.setAttribute('src', 'foto-adolecente-f.png')
            } else if (idade < 40){
                //adulto
                genero = 'uma Adulta'
                img.setAttribute('src', 'foto-jovem-f.png')
            } else {
                //velinho
                genero = 'uma Velhinha'
                img.setAttribute('src', 'foto-velho-f.png')
            }
        }
        res.style.textAlign = 'center' //alinhar o texto no centro
        res.innerHTML = `<p>Verificamos ${genero} de ${idade} anos.</p>`
        res.appendChild(img) //aparecer imagem
    }
}
