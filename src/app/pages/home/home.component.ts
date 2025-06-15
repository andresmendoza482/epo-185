import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';//Meta es una clase 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

//La interfaz OnInit se implementa en la clase HomeComponent
export class HomeComponent implements OnInit {

  private __title = inject(Title);
  private __meta = inject(Meta);

  ngOnInit(): void {
    this.__title.setTitle("EPO 185");
    this.__meta.updateTag({name: "autor", content: "Andrés Mendoza"});
    this.__meta.updateTag({name: "copyright", content: "Escuela Preparatoria Oficial No. 185"});
    this.__meta.updateTag({name: "description", content: "Página oficial de la Escuela Preparatoria Oficial No. 185"});
    this.__meta.updateTag({name: "keywords", content: "EPO, 185, escuela, preparatoria, oficial"});
    this.__meta.updateTag({name: "theme-color", content: "#111"});
    this.__meta.updateTag({property: "og:title", content: "EPO 185"});
    this.__meta.updateTag({property: "og:description", content: "Página oficial de la Escuela Preparatoria Oficial No. 185"});
    this.__meta.updateTag({property: "og:url", content: "epo-185.netlify.app"});
    this.__meta.updateTag({property: "og:img", content: "https://epo-185.netlify.app/assets/multimedia/img/webp/epo-185.webp"});
    this.__meta.updateTag({property: "og:type", content: "website"});
  }


}
