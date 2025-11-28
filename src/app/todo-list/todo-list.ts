import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from './todo.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input()
  items: Todo[] = [];
  @Output() deleteItem = new EventEmitter<number>();

  ngOnChanges() {
    console.log("items dari parent:", this.items);
  }

  addTodo(todo: string) {
    if (todo) {
      
    }
  }

  deleteTodo(index: number) {
      this.deleteItem.emit(index);
      this.items.splice(index, 1)
  }
}
