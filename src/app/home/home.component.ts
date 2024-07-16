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
  todos: Todo[] = [];

  addItem(){
    if(this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.todos.push(newItem);
      localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    this.todoValue = "";
  }

  isDone(id: number) {
    console.log(id);
    
    let doneTodo = this.todos.find(todo => todo.id === id);
    if (doneTodo) {
      doneTodo.isDone = true;
    }
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
  

  deleteItem(id: number){
    this.todos = this.todos.filter(item => item.id !== id);
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
}
