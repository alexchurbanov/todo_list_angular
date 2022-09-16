import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos!: Todo[];
  todos$: Observable<Todo[]>;
  onDestroy$: Subject<boolean>;

  constructor(private todoService: TodoService) {
    this.todos$ = todoService.todos$;
    this.onDestroy$ = new Subject<boolean>();
  }

  ngOnInit(): void {
    this.todos$
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(value => {
      this.todos = value;
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
