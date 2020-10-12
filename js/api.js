import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;

        
    }

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        fetch(url)
            .then( respuesta => respuesta.json() )
            .then(resultado => {
                const { lyrics } = resultado;

                if(resultado.lyrics) {
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`;
                    console.log( lyrics);
                } else {
                    UI.divMensaje.textContent = ('La canción no se encuentra, prueba con otra búsqueda');
                    UI.divMensaje.classList.add('error');

                    setTimeout( () => {
                        UI.divMensaje.textContent = ('');
                        UI.divMensaje.classList.remove('error');
                    }, 3000);
                }                
            })
    }
}

export default API;