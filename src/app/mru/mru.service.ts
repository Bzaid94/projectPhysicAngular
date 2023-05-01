import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MruService{

  constructor(public httpClient: HttpClient) {
  }

  calcularDatoFaltante(distancia: string, velocidad: string, tiempo: string): Observable<number> {
    const url = `http://localhost:7777/mru/calcularMRU?distancia=${distancia}&velocidad=${velocidad}&tiempo=${tiempo}`;
    return this.httpClient.get<number>(url);
  }

}
