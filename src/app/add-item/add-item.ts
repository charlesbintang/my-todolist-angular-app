import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [ReactiveFormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {
  newTask = new FormControl('');

  @Output() newTodo = new EventEmitter<string>();

  onSubmitTodo() {
    const task = this.newTask.value?.trim();
    if (task) {
      this.newTodo.emit(task);
      console.log(`New task added: ${task}`);
      this.newTask.reset();
    }
  }

}
