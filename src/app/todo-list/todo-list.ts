import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input() items: string[] = [];
  @Output() deleteItem = new EventEmitter<number>();

  deleteTodo(index: number) {
      this.deleteItem.emit(index);
      this.items.splice(index, 1)
  }
}
