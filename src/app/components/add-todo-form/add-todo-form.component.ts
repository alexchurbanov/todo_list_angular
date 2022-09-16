import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Todo, TodoService } from '../../services/todo.service';

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
    const newTodo: Todo = {
      id: uuidv4(),
      name: this.name
    };
    this.todoService.addTodo(newTodo);
    this.name = '';
  }

}
