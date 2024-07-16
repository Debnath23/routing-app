import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  todoValue: string = "";
  todo: Todo[] = [];

  addItem(){
    if(this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.todo.push(newItem);
      localStorage.setItem('todo', JSON.stringify(this.todo));
    }
    this.todoValue = "";
  }

  deleteItem(id: number){
    this.todo = this.todo.filter(item => item.id !== id);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
}
