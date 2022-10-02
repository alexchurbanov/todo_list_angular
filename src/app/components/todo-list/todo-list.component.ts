import { Component } from '@angular/core';
import { Todos$, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent {
  todos$: Todos$;

  constructor(private todoService: TodoService) {
    this.todos$ = todoService.todos$;
  }
}
