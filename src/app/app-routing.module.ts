import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Site/home/home.component';
import { TodoComponent } from './Todo/todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Todo-list', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
