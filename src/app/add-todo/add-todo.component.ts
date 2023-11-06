import { Component } from "@angular/core";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
})
export class AddTodoComponent {
  protected isLoading: boolean;
  protected isPosted: boolean;

  constructor() {
    this.isLoading = false;
    this.isPosted = false;
  }

  protected async onSubmit(e: Event) {
    e.preventDefault();
    const userElement: HTMLInputElement | null = <HTMLInputElement>(
      document.getElementById("user")
    );
    const user: string | null = userElement.value;

    const titleElement: HTMLInputElement | null = <HTMLInputElement>(
      document.getElementById("title")
    );
    const title: string | null = titleElement.value;
    const isCompletedElement: HTMLSelectElement | null = <HTMLSelectElement>(
      document.getElementById("completed")
    );
    const isCompleted: string | null = isCompletedElement.value;

    if (user.trim().length === 0 || title.trim().length === 0) return;
  }
}
