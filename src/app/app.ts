import { Component, OnInit, signal } from '@angular/core';
import { AddItem } from './add-item/add-item';
import { TodoService } from './services/todo.service';
import { TodoList } from './todo-list/todo-list';
import { Todo } from './todo-list/todo.interface';

@Component({
  selector: 'app-root',
  imports: [AddItem, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('my-angular-app');
  
  todos: Todo[] = []

  constructor(private todoService: TodoService) {}
  
  ngOnInit(): void {
    this.loadTodos()
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((response => {
      console.log(response)
      this.todos = response.data
      console.log(this.todos)
    }))
  }

  addTodo(todo: string) {
    if (todo) {
      // this.todos.update(todos => [...todos, todo]);
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.todos = [...this.todos]; // trigger update
  }
}
