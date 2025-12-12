import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-projeto-component',
  imports: [],
  templateUrl: './box-projeto-component.html',
  styleUrl: './box-projeto-component.css',
})
export class BoxProjetoComponent {
  @Input() titulo?:string;
  @Input() imagem?:string;
  @Input() conteudo?:string;
}
