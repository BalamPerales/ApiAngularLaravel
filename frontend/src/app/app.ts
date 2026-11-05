import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroCrudComponent } from './components/libro-crud/libro-crud';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LibroCrudComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
