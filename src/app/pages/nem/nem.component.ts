import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nem',
  standalone: true,
  imports: [],
  templateUrl: './nem.component.html',
  styleUrl: './nem.component.css'
})

export class NemComponent implements OnInit {

  private __title = inject(Title);
  private __meta = inject(Meta);

  ngOnInit(): void {
    this.__title.setTitle("EPO 185 | Nueva Escuela Mexicana");
    this.__meta.updateTag({name: "autor", content: "Andrés Mendoza"});
    this.__meta.updateTag({name: "copyright", content: "Escuela Preparatoria Oficial No. 185"});
    this.__meta.updateTag({name: "description", content: "Nueva Escuela Mexicana"});
    this.__meta.updateTag({name: "keywords", content: "nem, nueva, escuela, mexicana"});
    this.__meta.updateTag({name: "theme-color", content: "#111"});
    this.__meta.updateTag({property: "og:title", content: "EPO 185 | Nueva Escuela Mexicana"});
    this.__meta.updateTag({property: "og:description", content: "Nueva Escuela Mexicana"});
    this.__meta.updateTag({property: "og:url", content: "epo-185.netlify.app/nueva-escuela-mexicana"});
    this.__meta.updateTag({property: "og:img", content: "https://epo-185.netlify.app/assets/multimedia/img/webp/epo-185.webp"});
    this.__meta.updateTag({property: "og:type", content: "website"});

  }

}
