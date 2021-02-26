import {Component, OnInit, Input} from '@angular/core';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.sass']
})
export class TodoItemsComponent implements OnInit {
  @Input() todos: any;
  todoForm = new FormGroup({
    todoNewName: new FormControl('', Validators.required),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  saveEdit(todo): void {
    if (!this.todoForm.valid) {
      return alert('There must be name');
    }
    todo.name = this.todoForm.value.todoNewName;
    this.todoForm.setValue({todoNewName: ''});
    todo.edit = false;
  }

  cancelEdit(todo): void {
    this.todoForm.setValue({todoNewName: ''});
    todo.edit = false;
  }

  checkTodo(todo, index): void {
    todo.checked = !todo.checked;
    moveItemInArray(this.todos, index, 0);
  }
}
