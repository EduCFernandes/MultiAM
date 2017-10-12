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
        $('body').addClass("stop-scrolling");
        $('body').bind('touchmove', function(e){e.preventDefault()})
      });

      $('.closebtn').click(function(){
        $('.sidenav').css("width", "0");
        $('#main').css("opacity", "1");
        $('body').removeClass("stop-scrolling");
        $('body').unbind('touchmove')
      });

      $('.selected').click(function(){
        $('.sidenav').css("width", "0");
        $('#main').css("opacity", "1");
        $('body').removeClass("stop-scrolling");
        $('body').unbind('touchmove')
        $("html, body").animate({ scrollTop: 0 }, "slow");
      });


  }
}
