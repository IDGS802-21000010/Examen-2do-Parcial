import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ILibro } from './interfaces/libro';
import { LibroService } from './services/libro.service';
import { TiendaModule } from './tienda/tienda.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, NgFor, NgIf, TiendaModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
