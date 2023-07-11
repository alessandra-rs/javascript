function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('itxtano')
    var resultado = document.getElementById('res')
    if (formularioAno.value.length == 0 || formularioAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formularioSexo = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formularioSexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (formularioSexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        resultado.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        resultado.appendChild(img)
    }
}