import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'vettorial-servicos',
  imports: [FontAwesomeModule],
  templateUrl: './servicos-section.html',
  styleUrl: './servicos-section.css',
})
export class ServicosSection {
  faCheck = faCheck
}
