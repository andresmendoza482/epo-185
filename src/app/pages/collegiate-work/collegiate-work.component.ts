import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-collegiate-work',
  standalone: true,
  imports: [],
  templateUrl: './collegiate-work.component.html',
  styleUrl: './collegiate-work.component.css'
})

//La interfaz OnInit se implementa en la clase CollegiateWorkComponent.
export class CollegiateWorkComponent implements OnInit {

  private __title = inject(Title);
  private __meta = inject(Meta);

  ngOnInit(): void {
    this.__title.setTitle("EPO 185 | Trabajo colegiado");
    this.__meta.updateTag({name: "autor", content: "Andrés Mendoza"});
    this.__meta.updateTag({name: "copyright", content: "Escuela Preparatoria Oficial No. 185"});
    this.__meta.updateTag({name: "description", content: "Trabajo colegiado de la Escuela Preparatoria Oficial No. 185"});
    this.__meta.updateTag({name: "keywords", content: "trabajo, colegiado"});
    this.__meta.updateTag({name: "theme-color", content: "#111"});
    this.__meta.updateTag({property: "og:title", content: "EPO 185 | Trabajo colegiado"});
    this.__meta.updateTag({property: "og:description", content: "Trabajo colegiado de la Escuela Preparatoria Oficial No. 185"});
    this.__meta.updateTag({property: "og:url", content: "epo-185.netlify.app/trabajo-colegiado"});
    this.__meta.updateTag({property: "og:img", content: "https://epo-185.netlify.app/assets/multimedia/img/webp/epo-185.webp"});
    this.__meta.updateTag({property: "og:type", content: "website"});
  }


}
