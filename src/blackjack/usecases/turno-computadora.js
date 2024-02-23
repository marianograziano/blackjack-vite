
import { pedirCarta } from './';
import { valorCarta } from './';
import { crearCartaHTML } from './';

/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @param {Array<HTMLElement>} puntosHTML 
 * @param {HTMLElement} divCartasComputadora
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,  deck = []) => {

    if (!puntosMinimos) throw 'Puntos minimos son necesarios';
    if (!puntosHTML) throw 'Puntos HTML son necesarios';
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta)

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

