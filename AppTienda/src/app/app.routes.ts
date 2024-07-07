import { Routes } from '@angular/router';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import { ContactoComponent } from './tienda/contacto/contacto.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'contacto', component: ContactoComponent}
];
