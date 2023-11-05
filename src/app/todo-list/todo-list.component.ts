import { Component } from "@angular/core";
import { Todo } from "src/types/todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
})
export class TodoListComponent {
  todos: Todo[] | undefined;

  constructor() {
    this.todos = undefined;
  }

  async ngOnInit() {
    this.todos = await this.fetchTodos();
  }

  protected async fetchTodos() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.json();
    } catch (e) {
      return e;
    }
  }
  protected preventDefault(event: Event) {
    event.preventDefault();
  }
}
