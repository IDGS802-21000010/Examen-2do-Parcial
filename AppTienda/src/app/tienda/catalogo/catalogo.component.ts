import { Component } from '@angular/core';
import { ILibro } from '../../interfaces/libro';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  listaLibros: ILibro[] = [];
  filtradoLibros: ILibro[] = [];
  txtBuscar: string = '';
  btnCatalogo: number | null = null;
  isResultLoaded = false;
  
  constructor(private _libroService: LibroService) {
    this.obtenerLibros();
  }

  obtenerLibros() {
    this._libroService.getList().subscribe({
      next: (data) => {
        this.listaLibros = data;
        this.filtradoLibros = data;
        this.isResultLoaded = true;
      },
      error: (e) => { console.log(e) }
    });
  }

  filtrarCategoria(idCategoria: number | null) {
    this.btnCatalogo = idCategoria;
    this.filtrarLibro();
  }

  filtrarLibro() {
    console.log('Buscar:', this.txtBuscar); // Verifica el valor de txtBuscar
    console.log('Categoría:', this.btnCatalogo); // Verifica el valor de btnCatalogo
    console.log('Libros:', this.listaLibros); // Verifica la lista de libros antes de filtrar

    this.filtradoLibros = this.listaLibros.filter(libro => 
      libro.nombre.includes(this.txtBuscar) && (this.btnCatalogo === null || libro.idCategoria === this.btnCatalogo)
    );

    console.log('Libros Filtrados:', this.filtradoLibros);
  }
}
