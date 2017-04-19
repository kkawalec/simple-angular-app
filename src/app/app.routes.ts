import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonTableComponent } from './pokemon/pokemon-table.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details.component';
import { InfoComponent } from './info/info.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  },
  { path: 'pokemon', component: PokemonTableComponent },
  { path: 'detail/:name', component: PokemonDetailsComponent },
  { path: 'info', component: InfoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
