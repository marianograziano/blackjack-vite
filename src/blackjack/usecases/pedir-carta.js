/**
 * Esta funcion permite tomar una carta
 * @param {Array<string>} deck recibe un mazo de cartas
 * @returns {string} retorna una carta del mazo 
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}