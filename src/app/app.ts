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
      console.log(`New task added in list of todos: ${todo}`);
      console.log(this.todos());
    }
  }

  removeTodo(todo: string) {
    if (todo) {
      console.log(`Task: ${todo}`)
      this.todos.update(todos => todos.filter(item => item !== todo));
      console.log(`Task removed from list of todos: ${todo}`);
      console.log(`Todos: ${this.todos}`)
    }
  }
}
