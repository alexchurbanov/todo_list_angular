import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { InfoDialogComponent } from '../../shared/components/info-dialog/info-dialog.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-edit-todo-form',
  templateUrl: './edit-todo-form.component.html',
  styleUrls: ['./edit-todo-form.component.sass']
})
export class EditTodoFormComponent implements OnInit {
  @Input() todo!: Todo;
  newName!: string;

  constructor(private todoService: TodoService, private dialog: Dialog) {
  }

  ngOnInit(): void {
    this.newName = this.todo.name;
  }

  cancel() {
    this.todo.edit = false;
    this.todoService.editTodo(this.todo);
  }

  editTodo() {
    this.newName = this.newName.trim();
    if (!this.newName) {
      const dialogRef = this.dialog.open<boolean>(InfoDialogComponent, {data: {message: 'Name is required!'}});
      dialogRef.closed.subscribe({});
      return;
    }
    this.todo.name = this.newName;
    this.todo.edit = false;
    this.todoService.editTodo(this.todo);
  }
}
