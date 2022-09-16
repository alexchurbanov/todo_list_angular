import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-edit-todo-form',
  templateUrl: './edit-todo-form.component.html',
  styleUrls: ['./edit-todo-form.component.sass']
})
export class EditTodoFormComponent implements OnInit {
  @Input() todo!: Todo;
  newName!: string;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.newName = this.todo.name;
  }

  cancel() {
    this.todo.edit = false;
    this.todoService.editTodo(this.todo);
  }

  editTodo() {
    if (!this.newName.trim()) return alert('New name is required');
    this.todo.name = this.newName;
    this.todo.edit = false;
    this.todoService.editTodo(this.todo);
  }
}
