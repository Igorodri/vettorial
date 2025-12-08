import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Header } from './components/header/header';
import {Bannerhome} from './components/bannerhome/bannerhome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header,CommonModule,Bannerhome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Vettorial');
}
