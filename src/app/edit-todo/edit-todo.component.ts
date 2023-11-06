import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Todo } from "src/types/todo";

@Component({
  selector: "app-edit-todo",
  templateUrl: "./edit-todo.component.html",
})
export class EditTodoComponent {
  protected singleTodo: Todo | undefined;
  protected todoId: string | null | undefined;
  protected isLoading: boolean;
  protected isEdited: boolean

  constructor(private route: ActivatedRoute) {
    this.isLoading = false;
    this.isEdited = false
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

  protected async applyEdit(){
    
  }
}
