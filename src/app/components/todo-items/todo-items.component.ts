import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.sass']
})
export class TodoItemsComponent implements OnInit {
  @Input() todos: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  saveEdit(todo): void {
    todo.name = todo.new_name;
    delete todo.new_name;
    todo.edit = false;
  }

  cancelEdit(todo): void {
    delete todo.new_name;
    todo.edit = false;
  }

  checkTodo(todo): void {
    todo.checked = !todo.checked;
  }
}
