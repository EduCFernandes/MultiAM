import { Component, OnInit } from '@angular/core';

import {Palestras} from './lista-palestras/palestra.model';

@Component({
  selector: 'app-palestras',
  templateUrl: './palestras.component.html',
  styleUrls: ['./palestras.component.css']
})
export class PalestrasComponent implements OnInit {


  palestras: Palestras[] = [
     {
       id:"palestra-android",
       nome:"Android",
       data: "05/10/2017",
       local: "Belo Hoizonte",
       palestrante: "Julio Alves",
       image: "assets/img/palestras/palestra1.png"
     },
     {
       id:"palestra-ios",
       nome:"IOS",
       data: "03/05/2017",
       local: "São Paulo",
       palestrante: "Alessandra Sousa",
       image: "assets/img/palestras/palestra2.png"
     },
     {
       id:"palestra-IOT",
       nome:"IOT",
       data: "17/05/2017",
       local: "Rio de Janeiro",
       palestrante: "Leandro Ribeiro",
       image: "assets/img/palestras/palestra3.png"
     },
     {
       id:"palestra-gestao-negocios",
       nome:"Gestão de Negócios",
       data: "11/12/2017",
       local: "Brasilia",
       palestrante: "Eduardo Fernandes",
       image: "assets/img/palestras/palestra4.jpg"
     },
     {
       id:"palestra-clound",
       nome:"Clound",
       data: "02/05/2017",
       local: "São Paulo",
       palestrante: "Lucas Tavares",
       image: "assets/img/palestras/palestra5.png"
     },
     {
       id:"palestra-inteligencia-artificial",
       nome:"Inteligência Artificial",
       data: "31/05/2017",
       local: "Minas Gerais",
       palestrante: "Lucas Henrique",
       image: "assets/img/palestras/palestra6.jpg"
     },
     {
       id:"palestra-machine-learning",
       nome:"Machine learning",
       data: "10/06/2017",
       local: "Rio de Janeiro",
       palestrante: "Renan Dato",
       image: "assets/img/palestras/palestra7.png"
     },
     {
       id:"palestra-seguranca-digital",
       nome:"Segurança Digital",
       data: "15/04/2017",
       local: "Brasilia",
       palestrante: "Humberto Delgado",
       image: "assets/img/palestras/palestra8.png"
     }
  ]


  constructor() { }

  ngOnInit() {
  }

}
