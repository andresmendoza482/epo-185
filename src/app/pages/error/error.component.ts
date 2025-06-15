import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})

export class ErrorComponent implements OnInit {

  private __title  = inject(Title);
  private __meta = inject(Meta);

  ngOnInit(): void {
    this.__title.setTitle("EPO 185 | error");
    this.__meta.updateTag({name: "autor", content: "Andrés Mendoza"});
    this.__meta.updateTag({name: "copyright", content: "Escuela Preparatoria Oficial No. 185"});
    this.__meta.updateTag({name: "description", content: "Error, no se encuentra la página de la EPO 185"});
    this.__meta.updateTag({name: "keywords", content: "error"});
    this.__meta.updateTag({name: "theme-color", content: "#111"});
    this.__meta.updateTag({property: "og:title", content: "EPO 185 | error"});
    this.__meta.updateTag({property: "og:description", content: "Error, no se encuentra la página de la EPO 185"});
    this.__meta.updateTag({property: "og:url", content: "epo-185.netlify.app/error"});
    this.__meta.updateTag({property: "og:img", content: "https://epo-185.netlify.app/assets/multimedia/img/webp/epo-185.webp"});
    this.__meta.updateTag({property: "og:type", content: "website"});

  }

}
