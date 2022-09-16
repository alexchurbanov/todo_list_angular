import { Component, Input } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) {
  }

  deleteTodo() {
    this.todoService.removeTodo(this.todo);
  }

  markForEdit() {
    this.todo.edit = true;
    this.todoService.editTodo(this.todo);
  }

  checkTodo() {
    this.todo.checked = !this.todo.checked;
    this.todoService.editTodo(this.todo);
  }
}


