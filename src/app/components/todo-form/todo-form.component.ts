import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})
export class TodoFormComponent implements OnInit {
  @Input() todos: Array<{ id: string, name: string }>;
  todoForm = new FormGroup({
    todoName: new FormControl('', Validators.required),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.todoForm.valid) {
      return alert('There must be name');
    }
    this.todos.push({id: uuidv4(), name: this.todoForm.value.todoName});
    this.todoForm.setValue({todoName: ''});
  }

}
