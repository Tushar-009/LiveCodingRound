import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetrecipesComponent } from './getrecipes/getrecipes.component';

const routes: Routes = [
  {path: '', redirectTo: '/getrecipes', pathMatch: 'full'},
  {path: 'getrecipes', component: GetrecipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
