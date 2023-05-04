import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MRUV } from './mruv.model';
import { MRUVService } from './mruv.service';

@Component({
  selector: 'app-mruv',
  templateUrl: './mruv.component.html',
  styleUrls: ['./mruv.component.css']
})
export class MruvComponent {
  mruv: MRUV = {};
  resultados!: Map<string, number>;
  resultadosArray!: { key: string, value: number, unidad: string}[];

  constructor(private mruvService: MRUVService, public router: Router) { }

  calcularMRUV(): void {
    if(this.mruv.distancia == null) {
      this.mruv.distancia = '0';
    }

    if(this.mruv.velocidadInicial == null) {
      this.mruv.velocidadInicial = '0';
    }

    if(this.mruv.velocidadFinal == null) {
      this.mruv.velocidadFinal = '0';
    }

    if(this.mruv.tiempo == null) {
      this.mruv.tiempo = '0';
    }

    if (this.mruv.aceleracion == null) {
      this.mruv.aceleracion = '0';
    }

    this.mruvService.calcularMRUV(this.mruv)
      .subscribe(
        resultados => {
          this.resultados = resultados;
          this.resultadosArray = Array.from(resultados, ([key, value]) => ({ key, value, unidad: this.getUnidad(key) }));
        },
        error => {
          console.log(error);
        }
      );
  }

  getUnidad(parametro: string): string {
    switch (parametro) {
      case 'Aceleración':
        return 'm/s^2';
      case 'Distancia':
        return 'm';
      case 'Velocidad Inicial':
        return 'm/s';
      case 'Velocidad Final':
        return 'm/s';
      case 'Velocidad Media':
        return 'm/s';
      case 'Tiempo':
        return 's';
      default:
        return '';
    }
  }

  backToMenu() {
    this.router.navigate(['/menuFisica']);
  }
}
