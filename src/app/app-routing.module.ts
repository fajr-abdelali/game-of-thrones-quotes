import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './component/houses/houses.component';
import { PersonsComponent } from './component/persons/persons.component';
import { QuotesComponent } from './component/quotes/quotes.component';
import { HouseMembersComponent } from './component/houses/house-members/house-members.component';

const routes: Routes = [
  {path:'houses',component:HousesComponent,children:[{path:'member',component:HouseMembersComponent}]},
  {path:'persons',component:PersonsComponent},
  {path:'quotes',component:QuotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
