import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BeerDetailsComponent } from './main/beer-details/beer-details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'beer/:id', component: BeerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
