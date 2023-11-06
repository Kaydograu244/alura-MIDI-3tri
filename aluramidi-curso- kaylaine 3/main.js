function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTecla = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTecla.length;) {

    const tecla = listaDeTecla[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_$(instrumento)`; //template string

    tecla.onclick = function () { 
        tocaSom(idAudio);
    }

   

    console.log(contador);

}