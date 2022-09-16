import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./components/app/app.component";
import { AddTodoFormComponent } from "./components/add-todo-form/add-todo-form.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { EditTodoFormComponent } from "./components/edit-todo-form/edit-todo-form.component";

@NgModule({
  declarations: [
    AppComponent,
    AddTodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    EditTodoFormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
