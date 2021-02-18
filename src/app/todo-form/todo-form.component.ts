import {Component, OnInit, Input} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})
export class TodoFormComponent implements OnInit {
  todoName: string;
  @Input() todos: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.todoName) {
      return alert('Name can\'t be empty');
    }
    this.todos.push({id: uuidv4(), name: this.todoName});
    this.todoName = '';
    console.log(this.todos);
  }

}
