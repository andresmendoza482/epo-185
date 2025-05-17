/*Es donde se definen y configuran las rutas de la aplicación, 
permitiendo la navegación entre diferentes componentes y vistas*/
import { Routes } from '@angular/router';
//comienza la importación de las rutas.
import { HomeComponent } from '../app/pages/home/home.component';
import { ErrorComponent } from '../app/pages/error/error.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "**", component: ErrorComponent, pathMatch: 'full'}
];
