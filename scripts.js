const form = document.querySelector('.formulario-fale-conosco')
const mascara = document.querySelector('.mascara-fundo')



function aparecer() {
    form.style.left = '800px'
    mascara.style.visibility = 'visible'
}

function desaparecer() {
    form.style.left = '-800px'
    mascara.style.visibility = 'hidden'
    
}