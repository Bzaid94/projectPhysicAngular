import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mruv',
  templateUrl: './mruv.component.html',
  styleUrls: ['./mruv.component.css']
})
export class MruvComponent {

  constructor(public router: Router) {
  }
  backToMenu() {
    this.router.navigate(['/menuFisica']);
  }
}
