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
  calculo!: number;
  resultado!: string;

  constructor(private mruService: MruService , public router: Router) {
  }

  calcular() {
    let valorFaltante = "";
    if (!this.distancia) {
      this.distancia = "0";
      valorFaltante = 'DISTANCIA';
    }
    if (!this.velocidad) {
      this.velocidad = "0";
      valorFaltante = 'VELOCIDAD';
    }
    if (!this.tiempo) {
      this.tiempo = "0";
      valorFaltante = 'TIEMPO';
    }

    this.mruService.calcularDatoFaltante(this.distancia, this.velocidad, this.tiempo)
      .subscribe((datoFaltante) => {
        if (valorFaltante === 'DISTANCIA') {
          this.calculo = datoFaltante;
          this.resultado = `El resultado es: ${datoFaltante} metros`;
        } else if (valorFaltante === 'VELOCIDAD') {
          this.calculo = datoFaltante;
          this.resultado = `El resultado es: ${datoFaltante} m/s`;
        } else if (valorFaltante === 'TIEMPO') {
          this.calculo = datoFaltante;
          this.resultado = `El resultado es: ${datoFaltante} segundos`;
        }
      });
  }

  backToMenu() {
    this.router.navigate(['/menuFisica']);
  }
}
