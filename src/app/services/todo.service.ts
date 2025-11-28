import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../todo-list/todo.interface';
import { ApiResponse } from './response.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API_URL = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<ApiResponse<Todo[]>>(this.API_URL);
  }

  addTodo(todo: any) {
    return this.http.post(this.API_URL, todo);
  }

  updateTodo(id: number, todo: any) {
    return this.http.put(`${this.API_URL}/${id}`, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
