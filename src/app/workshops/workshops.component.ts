import { Component, OnInit } from '@angular/core';

import {Workshops} from './lista-workshops/workshop.model';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  workshops: Workshops[] = [
     {
       id:"workshop-flat-design",
       nome:"Flat Design",
       data: "11/12/2017",
       vagas:"22",
       local: "São Paulo",
       image: "assets/img/workshops/workshop1.jpg"
     },
     {
       id:"workshop-tasl-runner",
       nome:"Task Runners",
       data: "1/10/2017",
       vagas:"15",
       local: "São Paulo",
       image: "assets/img/workshops/workshop2.jpg"
     },
     {
       id:"workshop-photoshop",
       nome:"Photoshop",
       data: "15/10/2017",
       vagas:"20",
       local: "São Paulo",
       image: "assets/img/workshops/workshop3.png"
     },
     {
       id:"workshop-midias-sociais",
       nome:"Midias Sociais",
       data: "16/10/2017",
       vagas:"10",
       local: "Rio de Janeiro",
       image: "assets/img/workshops/workshop4.png"
     },
     {
       id:"workshop-angular",
       nome:"Angular",
       data: "02/11/2017",
       vagas:"25",
       local: "São Paulo",
       image: "assets/img/workshops/workshop5.png"
     },
     {
       id:"workshop-edicao-video",
       nome:"Edição de Vídeo",
       data: "24/12/2017",
       vagas:"20",
       local: "São Paulo",
       image: "assets/img/workshops/workshop6.png"
     },
     {
       id:"workshop-marketing-digital",
       nome:"Marketing Digital",
       data: "18/10/2017",
       vagas:"10",
       local: "São Paulo",
       image: "assets/img/workshops/workshop7.jpg"
     },
  ]


  constructor() { }

  ngOnInit() {
  }

}
