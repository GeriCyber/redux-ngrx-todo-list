import { Todo } from './todo/models/todo.model';
import { filtrosValidos } from './filter/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filtroReducer } from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}


export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}