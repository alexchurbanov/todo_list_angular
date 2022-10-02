import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todos$, TodoService } from '../../services/todo.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  todos$: Todos$;
  completed: number;
  todoLength: number;
  unsub$: Subject<boolean>;

  constructor(private todoService: TodoService) {
    this.completed = 0;
    this.todoLength = 0;
    this.todos$ = todoService.todos$;
    this.unsub$ = new Subject<boolean>();
  }

  ngOnInit(): void {
    this.todos$
    .pipe(takeUntil(this.unsub$))
    .subscribe((todos) => {
      this.todoLength = todos.length;
      if (!this.todoLength) return;
      this.completed = Math.floor(todos.filter(item => item.checked).length * 100 / this.todoLength);
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next(true);
    this.unsub$.complete();
  }


}
