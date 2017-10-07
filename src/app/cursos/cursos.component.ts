import { Component, OnInit } from '@angular/core';

import {Cursos} from './lista-cursos/curso.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //ARRAY
  //ARRAY
  cursos: Cursos[] = [
     {
       id:"curso-javascript",
       nome:"Javascript",
       duracao: "12 Horas",
       valor: "R$9,00",
       image: "/assets/img/cursos/curso1.png"
     },
     {
       id:"curso-HTML5",
       nome:"HTML5",
       duracao: "10 Horas",
       valor: "R$7,00",
       image: "/assets/img/cursos/curso2.jpg"
     },
     {
       id:"curso-design",
       nome:"Design Thinking",
       duracao: "8 Horas",
       valor: "R$10,00",
       image: "assets/img/cursos/curso3.jpg"
     },
     {
       id:"curso-Java",
       nome:"Java",
       duracao: "22 Horas",
       valor: "R$20,00",
       image: "assets/img/cursos/curso4.png"
     },
     {
       id:"curso-android",
       nome:"Android",
       duracao: "24 Horas",
       valor: "R$22,00",
       image: "assets/img/cursos/curso5.png"
     },
     {
       id:"curso-empreendedorismo",
       nome:"Empreendedorismo",
       duracao: "6 Horas",
       valor: "R$6,00",
       image: "assets/img/cursos/curso6.jpg"
     },
     {
       id:"curso-marketing",
       nome:"Marketing Digital",
       duracao: "12 Horas",
       valor: "R$20,00",
       image: "assets/img/cursos/curso7.jpg"
     },
     {
       id:"curso-angular",
       nome:"Angular2",
       duracao: "36 Horas",
       valor: "R$30,00",
       image: "assets/img/cursos/curso8.png"
     },
  ]

  constructor() { }

  ngOnInit() {
  }

}
