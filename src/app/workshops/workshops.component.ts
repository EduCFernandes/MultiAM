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
       id:"workshop-swift",
       nome:"Desenvolvimento com Swift",
       data: "08/10/2017",
       vagas:"heue",
       local: "São Paulo",
       image: "assets/img/curso/curso1.png"
     },
     {
       id:"workshop-swift",
       nome:"Desenvolvimento com Swift",
       data: "08/10/2017",
       vagas:"heue",
       local: "São Paulo",
       image: "assets/img/curso/curso1.png"
     },
     {
       id:"workshop-swift",
       nome:"Desenvolvimento com Swift",
       data: "08/10/2017",
       vagas:"heue",
       local: "São Paulo",
       image: "assets/img/curso/curso1.png"
     },
     {
       id:"workshop-swift",
       nome:"Desenvolvimento com Swift",
       data: "08/10/2017",
       vagas:"heue",
       local: "São Paulo",
       image: "assets/img/curso/curso1.png"
     },
     {
       id:"workshop-swift",
       nome:"Desenvolvimento com Swift",
       data: "08/10/2017",
       vagas:"heue",
       local: "São Paulo",
       image: "assets/img/curso/curso1.png"
     },
     {
       id:"workshop-swift",
       nome:"Desenvolvimento com Swift",
       data: "08/10/2017",
       vagas:"heue",
       local: "São Paulo",
       image: "assets/img/curso/curso1.png"
     }
  ]


  constructor() { }

  ngOnInit() {
  }

}
