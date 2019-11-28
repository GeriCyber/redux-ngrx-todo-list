import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';
export const EDITAR_TODO = '[TODO] Editar Todo';
export const BORRAR_TODO = '[TODO] Borrar Todo';
export const TOGGLE_ALL = '[TODO] Toggle all Todo';
export const BORRAR_ALL_TODO = '[TODO] Borrar all Todo';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public text: string) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) {}
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public text: string) {}
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id: number) {}
}

export class BorrarALLTodoAction implements Action {
    readonly type = BORRAR_ALL_TODO;
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL;
    constructor(public complete: boolean) {}
}

export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction | 
BorrarTodoAction | ToggleAllTodoAction | BorrarALLTodoAction;

