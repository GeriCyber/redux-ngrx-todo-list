import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputField', {static: false}) txtInputField: ElementRef;
  checkField: FormControl;
  txtInput: FormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.complete);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    console.log(this.todo);

    this.checkField.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  editar() {
    this.editing = true;
    const timeOut = setTimeout(() => {
      this.txtInputField.nativeElement.select();
      // clearTimeout(timeOut);
    }, 1);
  }

  terminarEdicion() {
    this.editing = false;

    if (this.txtInput.invalid || this.txtInput.value === this.todo.text) {
      return;
    }

    const action = new EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  borrarTodo() {
    const action = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
