import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir prestado el traje de IronMan');
todo2.complete = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.text);
            return [...state, todo];
        case fromTodo.TOGGLE_ALL:
            return state.map((todoToggleAll) => {
                return {
                    ...todoToggleAll,
                    complete: action.complete
                };
            });
        case fromTodo.TOGGLE_TODO:
            return state.map((todoEdit) => {
                if (todoEdit.id === action.id) {
                    return { ...todoEdit, complete: !todoEdit.complete };
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.EDITAR_TODO:
            return state.map((todoEdit) => {
                if (todoEdit.id === action.id) {
                    return { ...todoEdit, text: action.text };
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.BORRAR_TODO:
            return state.filter((todoDelete) => todoDelete.id !== action.id);
        case fromTodo.BORRAR_ALL_TODO:
            return state.filter((todoDelete) => !todoDelete.complete);
        default:
            return state;
    }
}
