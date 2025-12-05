import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'vettorial-header',
  standalone:true,
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  faBars = faBars;
}
