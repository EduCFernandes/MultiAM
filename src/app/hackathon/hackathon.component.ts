import { Component, OnInit } from '@angular/core';

import {Hackathons} from './lista-hackathons/hackathon.model';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.css']
})
export class HackathonComponent implements OnInit {

  hackathons: Hackathons[] = [
     {
       id:"hackathon-fiap",
       nome:"Hackathon FIAP",
       data: "09/10/2017",
       local: "São Paulo",
       image: "assets/img/hackathons/hackathon1.png"
     },

     {
       id:"hackathon-uol",
       nome:"Hackathon Uol",
       data: "25/11/2017",
       local: "Rio de Janeiro",
       image: "assets/img/hackathons/hackathon2.png"
     },

     {
       id:"hackathon-itau",
       nome:"Hackathon Itaú",
       data: "11/10/2017",
       local: "São Paulo",
       image: "assets/img/hackathons/hackathon3.png"
     },

     {
       id:"hackathon-bem-estar",
       nome:"Hackathon Bem Estar",
       data: "20/08/2017",
       local: "São Paulo",
       image: "assets/img/hackathons/hackathon4.jpg"
     },

     {
       id:"hackathon-solidario",
       nome:"Hackathon Solidário",
       data: "10/01/2018",
       local: "Minas Gerais ",
       image: "assets/img/hackathons/hackathon5.jpg"
     },

     {
       id:"hackathon-fiesp",
       nome:"Hackathon Fiesp",
       data: "15/06/2017",
       local: "São Paulo",
       image: "assets/img/hackathons/hackathon6.jpg"
     },

     {
       id:"hackathon-sabesp",
       nome:"Hackathon Sabesp",
       data: "05/07/2017",
       local: "Brasilia",
       image: "assets/img/hackathons/hackathon7.png"
     },

     {
       id:"hackathon-vivo",
       nome:"Hackathon Vivo",
       data: "25/11/2017",
       local: "Fortaleza",
       image: "assets/img/hackathons/hackathon8.png"
     },

     {
       id:"hackathon-ibm",
       nome:"Hackathon IBM",
       data: "30/09/2017",
       local: "São Paulo",
       image: "assets/img/hackathons/hackathon9.png"
     },

     {
       id:"hackathon-globo",
       nome:"Hackathon Globo",
       data: "01/11/2017",
       local: "Osasco",
       image: "assets/img/hackathons/hackathon10.png"
     }


  ]


  constructor() { }

  ngOnInit() {
  }

}
