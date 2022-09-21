import { Component, Input } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService, private dialog: Dialog) {
  }

  deleteTodo() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Do you really want to remove this todo?'
      }
    });
    dialogRef.closed.subscribe({
      next: (res) => {
        if (res) this.todoService.removeTodo(this.todo);
      }
    });
  }

  markForEdit() {
    this.todo.edit = true;
    this.todoService.editTodo(this.todo);
  }

  checkTodo() {
    this.todoService.editTodo(this.todo);
  }
}
