import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private todoService: TodoService) {
  }

  drop($event: CdkDragDrop<any>) {
    this.todoService.moveTodo($event.previousIndex, $event.currentIndex);
  }
}
