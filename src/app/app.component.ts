import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/components/header/header.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {//Implementamos la interfaz OnInit para realizar una acción en cuanto el componente cargue en pantalla.
  loading: boolean = false;


  ngOnInit(): void {//Utilizamos el método OnInit de tipo vacío para verificar que el componente se haya creado, de ser así cambia la varible a true, lo que removerá el loader en pantalla.
    this.loading = true;
  }

  title = 'epo-185';
}
