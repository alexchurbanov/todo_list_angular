import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Dialog } from '@angular/cdk/dialog';
import { InfoDialogComponent } from '../../shared/components/info-dialog/info-dialog.component';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.sass']
})
export class AddTodoFormComponent {
  name: string;

  constructor(private todoService: TodoService, private dialog: Dialog) {
    this.name = '';
  }

  createTodo() {
    this.name = this.name.trim();
    if (!this.name) {
      const dialogRef = this.dialog.open<boolean>(InfoDialogComponent, {data: {message: 'Name is required!'}});
      dialogRef.closed.subscribe({});
      return;
    }
    this.todoService.addTodo(this.name);
    this.name = '';
  }
}
