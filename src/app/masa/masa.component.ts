import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-masa',
  templateUrl: './masa.component.html',
  styleUrls: ['./masa.component.css']
})
export class MasaComponent {
  masa!: string;
  origen!: string;
  destino!: string;
  resultado!: number;

  constructor(private httpClient: HttpClient, public router: Router) {
  }

  convertirMasa() {
    const url = 'http://localhost:7777/conversion/convertMasa/'
      + this.masa + '/' + this.origen + '/' + this.destino;

    this.httpClient.get<number>(url).subscribe(result =>{
      this.resultado = result;
    });
  }

  backToMenu() {
    this.router.navigate(['/menuConversion']);
  }
}
