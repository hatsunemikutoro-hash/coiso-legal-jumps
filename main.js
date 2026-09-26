sprite = document.getElementById('carta');
abrido = false
const imagem = document.getElementById('secreta_imagem');
sprite.addEventListener('click', () => {
    if (abrido == false) {
        abrido = true;
        sprite.src = 'carta_abrida.png'
        imagem.classList.remove('ativa');
        void imagem.offsetWidth;
        imagem.classList.add('ativa');
    }
})

