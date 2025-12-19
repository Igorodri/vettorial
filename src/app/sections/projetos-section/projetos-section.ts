import { Component } from '@angular/core';
import { BoxProjetoComponent } from '../../components/box-projeto-component/box-projeto-component';

@Component({
  selector: 'vettorial-projetos',
  imports: [BoxProjetoComponent],
  templateUrl: './projetos-section.html',
  styleUrl: './projetos-section.css',
})
export class ProjetosSection {
  public conteudoEmpresa:string = 'teste';
}
