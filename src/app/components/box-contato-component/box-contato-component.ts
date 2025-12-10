import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-contato-component',
  imports: [],
  templateUrl: './box-contato-component.html',
  styleUrl: './box-contato-component.css',
})
export class BoxContatoComponent {
  @Input() link?:string;
  @Input() src?:string
}
