import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { app } from './app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  // inline html
 // template: `<h1>Hello world</h1>
  //<p>good morning</p>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  
}
