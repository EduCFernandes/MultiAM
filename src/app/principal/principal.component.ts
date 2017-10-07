import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.openNav').click(function(){
        $('.sidenav').css("width", "280px");
        $('#main').css("opacity", "0.4");
      });

      $('.closebtn').click(function(){
        $('.sidenav').css("width", "0");
        $('#main').css("opacity", "1");
      });
  }
}