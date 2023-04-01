import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent {
  tiempo!: string;
  origen!: string;
  destino!: string;
  resultado!: string;

  unidadTiempo : any = {
    'segundos': 'Segundos',
    'minutos': 'Minutos',
    'horas': 'Horas',
    'dias': 'Días',
    'anios': 'Años'
  }

  constructor(private httpClient: HttpClient, public router: Router) {
  }

  convertirTiempo() {
    const url = 'http://localhost:7777/conversion/convertTiempo/'
      + this.tiempo + '/' + this.origen + '/' + this.destino;

    this.httpClient.get<number>(url).subscribe(result =>{
      const nombreDestino = this.unidadTiempo[this.destino];
      this.resultado = `${result} ${nombreDestino}`;
    });
  }

  backToMenu() {
    this.router.navigate(['/menuConversion']);
  }
}
