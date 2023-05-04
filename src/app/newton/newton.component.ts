import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-newton',
  templateUrl: './newton.component.html',
  styleUrls: ['./newton.component.css']
})
export class NewtonComponent {
  constructor(public router: Router) {
  }

  backToMenu() {
    this.router.navigate(['/menuFisica']);
  }
}
