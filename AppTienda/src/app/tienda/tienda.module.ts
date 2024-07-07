import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    InicioComponent,
    CatalogoComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InicioComponent,
    CatalogoComponent,
    ContactoComponent
  ]
})
export class TiendaModule { }
