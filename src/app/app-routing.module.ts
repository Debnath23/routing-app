import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowTodosComponent } from './show-todos/show-todos.component'; // Import the component

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'show-todos', component: ShowTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
