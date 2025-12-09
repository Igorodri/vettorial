import { Component,Input } from '@angular/core';

@Component({
  selector: 'vettorial-box',
  imports: [],
  templateUrl: './box-component.html',
  styleUrl: './box-component.css',
})
export class BoxComponent {
  @Input() titulo?:string;
  @Input() imagem?:string;
  @Input() conteudo?:string;
}
