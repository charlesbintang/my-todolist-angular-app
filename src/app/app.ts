import { Component, signal } from '@angular/core';
import { AddItem } from './add-item/add-item';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [AddItem, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');

  todos = signal<string[]>([]);

  addTodo(todo: string) {
    if (todo) {
      this.todos.update(todos => [...todos, todo]);
    }
  }

  removeTodo(index: number) {
    this.todos.update(todos => todos.filter((_, i) => i !== index));
  }
}
