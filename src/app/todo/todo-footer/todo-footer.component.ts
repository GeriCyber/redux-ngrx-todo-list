import { Component, OnInit } from '@angular/core';
import { filtrosValidos, SetFiltroAction } from '../../filter/filter.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { BorrarALLTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((state) => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: filtrosValidos) {
    const action = new SetFiltroAction(nuevoFiltro);
    this.store.dispatch(action);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter((todo) => !todo.complete).length;
  }

  deleteAll() {
    const action = new BorrarALLTodoAction();
    this.store.dispatch(action);
  }

}
