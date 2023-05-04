import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MRUV} from './mruv.model';

@Injectable({
  providedIn: 'root'
})

export class MRUVService {
  private baseUrl = 'http://localhost:7777/mruv/calcularmruv';

  constructor(private http: HttpClient) { }

  calcularMRUV(mruv: MRUV): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(`${this.baseUrl}?distancia=${mruv.distancia}&velocidadInicial=${mruv.velocidadInicial}&velocidadFinal=${mruv.velocidadFinal}&tiempo=${mruv.tiempo}&aceleracion=${mruv.aceleracion}`)
      .pipe(
        map(resultados => new Map(Object.entries(resultados)))
      );
  }
}
