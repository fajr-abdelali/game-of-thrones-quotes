import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './component/houses/houses.component';
import { PersonsComponent } from './component/persons/persons.component';
import { QuotesComponent } from './component/quotes/quotes.component';
import { HouseMembersComponent } from './component/houses/house-members/house-members.component';
import { PersonComponent } from './component/persons/persons-list/person/person.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'members/:slug', component: HouseMembersComponent },
  { path: 'persons', component: PersonsComponent, },
  { path: 'persons/:slug', component: PersonComponent },
  { path: 'quotes', component: QuotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
