import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Todo } from "src/types/todo";

@Component({
  selector: "app-todo-details",
  templateUrl: "./todo-details.component.html",
})
export class TodoDetailsComponent {
  protected singleTodo: Todo | undefined;
  protected todoId: string | null | undefined;
  protected isLoading: boolean;
  protected isDeleted: boolean;
  
  constructor(private route: ActivatedRoute) {
    this.isLoading = false;
    this.isDeleted = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(async (params: ParamMap) => {
      try {
        const id = params.get("todoId");
        this.todoId = id;
        this.singleTodo = await this.fetchTodo(id as string);
        return;
      } catch (e) {
        return e;
      }
    });
  }

  protected async fetchTodo(todoId: string) {
    this.isLoading = true;
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      this.isLoading = false;
      return response.json();
    } catch (e) {
      this.isLoading = false;
      return e;
    }
  }

  protected async DeleteTodo() {
    this.isLoading = true;
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.todoId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to delete the todo");
      this.isDeleted = true;

      return (this.isLoading = false);
    } catch (e) {
      this.isLoading = false;
      return e;
    }
  }
}
