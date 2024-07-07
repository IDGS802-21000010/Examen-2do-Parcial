import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILibro } from '../interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private endpoint: string = environment.endPoint;
  private apiUrl: string = this.endpoint + "Libros/";
  constructor(private http: HttpClient) { }

  getList():Observable<ILibro[]>{
    return this.http.get<ILibro[]>(`${this.apiUrl}ListaLibros`);
  }
}
