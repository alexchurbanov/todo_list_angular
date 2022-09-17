import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  checked?: boolean;
  edit?: boolean;
  id: string;
  name: string;
}

@Injectable({providedIn: 'root'})
export class TodoService {
  private todoSource = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this.todoSource.asObservable();

  get todos(): Todo[] {
    return this.todoSource.getValue();
  }

  private setTodos(newValue: Todo[]): void {
    this.todoSource.next(newValue);
  }

  addTodo(todoName: string) {
    const newTodo: Todo = {
      id: uuidv4(),
      name: todoName
    };
    const newTodos = [...this.todos, newTodo];
    this.setTodos(newTodos);
  }

  removeTodo(todo: Todo) {
    const filteredTodos = this.todos.filter(item => todo.id !== item.id);
    this.setTodos(filteredTodos);
  }

  editTodo(todo: Todo) {
    let todos = [...this.todos];
    const todoIndex = todos.findIndex(value => value.id === todo.id);
    todos.splice(todoIndex, 1, {...todo});
    this.setTodos(todos);
  }

  moveTodo(from: number, to: number) {
    const newTodos = [...this.todos];
    const removed = newTodos.splice(from, 1)[0];
    newTodos.splice(to, 0, removed);
    this.setTodos(newTodos);
  }
}
