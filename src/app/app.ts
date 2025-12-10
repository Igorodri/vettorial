import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import {Bannerhome} from './components/bannerhome/bannerhome';
import { QuemSomosSectiom } from './sections/quem-somos-section/quem-somos-section';
import { ServicosSection } from './sections/servicos-section/servicos-section';
import { ProjetosSection } from './sections/projetos-section/projetos-section';
import { ContatosSection } from './sections/contatos-section/contatos-section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    CommonModule,
    Bannerhome,
    QuemSomosSectiom,
    ServicosSection,
    ProjetosSection,
    ContatosSection
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Vettorial');
}
