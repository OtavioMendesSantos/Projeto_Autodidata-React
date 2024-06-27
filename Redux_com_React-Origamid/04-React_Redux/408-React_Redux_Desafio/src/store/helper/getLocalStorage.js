
/**
 * 
 * @param {*} key - Nome da chave do Local Storage
 * @param {*} initial - Valor inicial do Local Storage caso a chave não exista
 * @returns 
 */
function getLocalStorage(key,initial){
    try{
        return JSON.parse(window.localStorage.getItem(key))
    } catch (e) {
        return initial
    }
}

export default getLocalStorage