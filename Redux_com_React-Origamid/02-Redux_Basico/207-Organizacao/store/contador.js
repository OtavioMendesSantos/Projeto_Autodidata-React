const INCREMENTAR = 'contador/INCREMENTAR';
const DECREMENTAR = 'contador/DECREMENTAR';

export const incrementar = () => ({ type: INCREMENTAR });
export const decrementar = () => ({ type: DECREMENTAR });

const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENTAR:
            return state + 1;
        case DECREMENTAR:
            return state - 1;
        default:
            return state;
    }
}

export default reducer
