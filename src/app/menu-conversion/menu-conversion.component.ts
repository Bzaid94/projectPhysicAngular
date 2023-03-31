import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu-conversion.component.html',
  styleUrls: ['./menu-conversion.component.css']
})
export class MenuConversionComponent {
  constructor(public router: Router) {

  }
  backToMenu() {
    this.router.navigate(['/']);
  }

}
