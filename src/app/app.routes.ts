/*Es donde se definen y configuran las rutas de la aplicación, 
permitiendo la navegación entre diferentes componentes y vistas*/
import { Routes } from '@angular/router';
//comienza la importación de las rutas.
import { HomeComponent } from '../app/pages/home/home.component';
import { ErrorComponent } from '../app/pages/error/error.component';
import { CollegiateWorkComponent } from '../app/pages/collegiate-work/collegiate-work.component';
import { NemComponent } from './pages/nem/nem.component';

//Se exporta la constante routes de tipo "type Routes".
export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "trabajo-colegiado", component: CollegiateWorkComponent},
    {path: "nueva-escuela-mexicana", component: NemComponent},
    {path: "**", component: ErrorComponent, pathMatch: 'full'}
];
