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
}
