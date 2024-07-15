import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "A Todo Project";
  todoValue: string = "";
  list: Todo[] = JSON.parse(localStorage.getItem('list') || '[]');

  addItem() {
    if(this.todoValue.trim() !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
      localStorage.setItem('list', JSON.stringify(this.list));
    }
    this.todoValue = "";
  }

  deleteItem(id: number) {
    this.list = this.list.filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(this.list));
  }
}
