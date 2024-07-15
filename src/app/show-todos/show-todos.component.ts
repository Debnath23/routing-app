import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo'; // Correct import path

@Component({
  selector: 'app-show-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './show-todos.component.html',
  styleUrls: ['./show-todos.component.css']
})
export class ShowTodosComponent {
  todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

  deleteItem(id: number) {
    this.todos = this.todos.filter(item => item.id !== id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}