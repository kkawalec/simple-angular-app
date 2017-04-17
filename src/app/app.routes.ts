import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonTableComponent } from './pokemon/pokemon-table.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  },
  { path: 'pokemon', component: PokemonTableComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
