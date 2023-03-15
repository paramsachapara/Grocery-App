import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './front/catalouge/category/category.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'category/:x',
    component:CategoryComponent
  }
  ,
  {
    path:'categories/:x',
    component:CategoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
