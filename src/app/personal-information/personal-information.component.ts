import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  constructor(public router: Router) {
  }
  backToMenu() {
    this.router.navigate(['/']);
  }
}
