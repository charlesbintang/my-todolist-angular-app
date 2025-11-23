import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input() items: string[] = [];
  @Output() deleteItem = new EventEmitter<string>();

  deleteTodo(todo: string) {
    if (todo) {
      this.deleteItem.emit(todo);
      this.items = this.items.filter(todos => todo !== todos)
    }
  }
}
