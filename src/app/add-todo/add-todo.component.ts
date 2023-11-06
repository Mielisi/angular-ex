import { Component } from "@angular/core";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
})
export class AddTodoComponent {
  protected isLoading: boolean;
  protected isPosted: boolean;
  protected error: string;

  constructor() {
    this.isLoading = false;
    this.isPosted = false;
    this.error = "No error found";
  }

  protected async onSubmit(e: Event) {
    this.error = "No error found";
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

    if (user.trim().length === 0 || title.trim().length === 0) {
      user.trim().length === 0 && title.trim().length === 0
        ? (this.error = " Please insert a title and a user id")
        : title.trim().length === 0
        ? (this.error = "Please insert a title")
        : (this.error = "Please insert the user id ");
      return;
    }

    try {
      this.isLoading = true;
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, title, isCompleted }),
      });

      if (!res.ok) throw new Error("Something is wrong");
      this.isLoading = false;
      this.isPosted = true;
      return;
    } catch (fetchError) {
      this.isPosted = false;
      this.error = fetchError as string;
      return e;
    }
  }
}
