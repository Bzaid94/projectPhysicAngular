import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-fisica',
  templateUrl: './menu-fisica.component.html',
  styleUrls: ['./menu-fisica.component.css']
})
export class MenuFisicaComponent {
  constructor(public router: Router) {

  }
  backToMenu() {
    this.router.navigate(['/']);
  }

}
