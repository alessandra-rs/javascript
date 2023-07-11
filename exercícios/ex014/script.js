function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var resultado = document.getElementById('res')
    var msg = window.document.getElementById('msg')
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    if (hora >= 8 && hora < 12 ) {
        img.setAttribute('src', 'manha.jpg')
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.setAttribute('src', 'tarde.jpg')
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.setAttribute('src', 'noite.jpg')
        document.body.style.backgroundColor = '#515154'
    }
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    resultado.appendChild(img)
}