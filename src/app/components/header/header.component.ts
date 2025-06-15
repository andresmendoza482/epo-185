import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';//Clase que permite navegar entre rutas mediante links.

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

}
