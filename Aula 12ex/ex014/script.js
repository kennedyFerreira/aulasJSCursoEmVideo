function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        imagem.src = 'fotomanha.png'
        document.body.style.background = 'green'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'fototarde.png'
        document.body.style.background = 'yellow'
    } else {
        imagem.src = 'fotonoite.png'
        document.body.style.background = 'rgb(87, 77, 77)'
    }

} 