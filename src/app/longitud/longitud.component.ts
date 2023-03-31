import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-longitud',
  templateUrl: './longitud.component.html',
  styleUrls: ['./longitud.component.css']
})

export class LongitudComponent {
  longitud!: string;
  origen!: string;
  destino!: string;
  resultado!: number;

  constructor(private httpClient: HttpClient, public router: Router) {
  }
  convertirLongitud() {
    const url = 'http://localhost:7777/conversion/convertLong/'
      + this.longitud + '/' + this.origen + '/' + this.destino;

    this.httpClient.get<number>(url).subscribe(result =>{
      this.resultado = result;
    });
  }

  backToMenu() {
    this.router.navigate(['/menuConversion']);
  }
}
