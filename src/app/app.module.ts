import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './component/houses/houses.component';
import { PersonsComponent } from './component/persons/persons.component';
import { QuotesComponent } from './component/quotes/quotes.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HouseListComponent } from './component/houses/house-list/house-list.component';
import { HouseMembersComponent } from './component/houses/house-members/house-members.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    PersonsComponent,
    QuotesComponent,
    NavbarComponent,
    HouseListComponent,
    HouseMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
