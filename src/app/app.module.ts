import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { PokemonTableComponent } from './pokemon/pokemon-table.component'
import { PokemonDetailsComponent } from './pokemon/pokemon-details.component'
import { NavigationComponent } from './navigation/navigation.component'

import { PokemonService } from './services/pokemon.service'
@NgModule({
  declarations: [
    AppComponent,
    PokemonTableComponent,
    PokemonDetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
