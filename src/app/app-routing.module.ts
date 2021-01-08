import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';

const routes: Routes = [
  {path : '', component :Home1Component },
  {path : 'home2', component :Home2Component },
  {path : 'home3', component :Home3Component },
  {path : 'home4', component :Home4Component }


 // {path : home1', component :Home1Component },
// {path : '', component :Home2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

