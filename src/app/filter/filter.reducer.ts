import { filtrosValidos, acciones, SET_FILTRO } from './filter.actions';

const estadoInicial: filtrosValidos = 'todos';

export function filtroReducer(state = estadoInicial, action: acciones): filtrosValidos {
    switch (action.type) {
        case SET_FILTRO:
            return action.filtro;
        default:
            return state;
    }
}
