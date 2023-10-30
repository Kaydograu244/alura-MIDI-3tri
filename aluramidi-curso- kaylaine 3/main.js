function tcaSom (selectorElemento0) {
    const elemento = document.querySelector(selectorElemento);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encomtrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
