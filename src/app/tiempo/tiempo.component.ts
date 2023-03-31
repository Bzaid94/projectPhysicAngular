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
  resultado!: number;

  constructor(private httpClient: HttpClient, public router: Router) {
  }

  convertirTiempo() {
    const url = 'http://localhost:7777/conversion/convertTiempo/'
      + this.tiempo + '/' + this.origen + '/' + this.destino;
    this.httpClient.get<number>(url).subscribe(result =>{
      this.resultado = result;
    });
  }

  backToMenu() {
    this.router.navigate(['/menuConversion']);
  }
}
