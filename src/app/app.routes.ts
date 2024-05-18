import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BodegaComponent } from './views/bodega/bodega.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'bodega/:cantidad', component: BodegaComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
