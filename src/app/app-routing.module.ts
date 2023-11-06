import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoDetailsComponent } from "./todo-details/todo-details.component";
import { EditTodoComponent } from "./edit-todo/edit-todo.component";

const routes: Routes = [
  { path: "", component: TodoListComponent },
  {
    path: "todo/:todoId",
    component: TodoDetailsComponent,
  },
  {
    path: "edit/:todoId",
    component: EditTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
