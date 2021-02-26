import {Component} from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Todo-List';
  todos = [];

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  sortPredicate(index: number, item: CdkDrag): boolean {
    const checkedIndexes = [];
    item.data.forEach((o, i) => {
      if (o.checked) {
        checkedIndexes.push(i);
      }
    });
    return !checkedIndexes.includes(index);
  }
}
