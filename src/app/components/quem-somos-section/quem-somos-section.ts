import { Component } from '@angular/core';
import { BoxComponent } from '../box-component/box-component';

@Component({
  selector: 'vettorial-section',
  imports: [BoxComponent],
  templateUrl: './quem-somos-section.html',
  styleUrl: './quem-somos-section.css',
})

export class QuemSomosSectiom {
  public conteudoEmpresa:string = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text.';
}
