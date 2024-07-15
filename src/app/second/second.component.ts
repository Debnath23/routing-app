import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-show-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent {
  todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

  deleteItem(id: number) {
    this.todos = this.todos.filter(item => item.id !== id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  get doneTodos(): Todo[] {
    return this.todos.filter(todo => todo.isDone);
  }
}
