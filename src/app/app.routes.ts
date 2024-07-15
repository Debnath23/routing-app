import { Routes } from '@angular/router';
import {SecondComponent} from './second/second.component';
import { ShowTodosComponent } from './show-todos/show-todos.component';

export const routes: Routes = [
        { path: 'show-todos', component: ShowTodosComponent },
        { path: 'second-component', component: SecondComponent },
];
