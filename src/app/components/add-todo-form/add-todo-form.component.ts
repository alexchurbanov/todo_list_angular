import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.sass']
})
export class AddTodoFormComponent {
  name: string;

  constructor(private todoService: TodoService) {
    this.name = '';
  }

  createTodo() {
    if (!this.name.trim()) return alert('Name is required');
    this.todoService.addTodo(this.name);
    this.name = '';
  }
}
