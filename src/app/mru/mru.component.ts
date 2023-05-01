import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MruService } from './mru.service';

@Component({
  selector: 'app-mru',
  templateUrl: './mru.component.html',
  styleUrls: ['./mru.component.css']
})
export class MruComponent {
  distancia!: string;
  velocidad!: string;
  tiempo!: string;
  resultado!: number;

  constructor(private mruService: MruService , public router: Router) {
  }

  calcular() {
    if (!this.distancia) {
      this.distancia = "0";
    }
    if (!this.velocidad) {
      this.velocidad = "0";
    }
    if (!this.tiempo) {
      this.tiempo = "0";
    }

    this.mruService.calcularDatoFaltante(this.distancia, this.velocidad, this.tiempo)
      .subscribe((datoFaltante) => this.resultado = datoFaltante);
  }

  backToMenu() {
    this.router.navigate(['/menuFisica']);
  }
}
