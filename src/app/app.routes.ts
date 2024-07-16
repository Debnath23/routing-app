import { Routes } from '@angular/router';
import { ShowTodosComponent } from './show-todos/show-todos.component';
import { SecondComponent } from './second/second.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'show-todos', component: ShowTodosComponent },
  { path: 'todos-done', component: SecondComponent },
  { path: 'details', component: DetailsComponent },
];