import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { CatsTableComponent } from './cats/cats-table.component'

import { PetService } from './services/pet.service'
@NgModule({
  declarations: [
    AppComponent,
    CatsTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
