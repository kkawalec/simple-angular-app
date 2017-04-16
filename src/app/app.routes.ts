import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsTableComponent } from './cats/cats-table.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/cats',
    pathMatch: 'full'
  },
  { path: 'cats', component: CatsTableComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
