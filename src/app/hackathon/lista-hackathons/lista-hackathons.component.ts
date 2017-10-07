import { Component, OnInit, Input} from '@angular/core';

import {Hackathons} from './hackathon.model';

@Component({
  selector: 'app-lista-hackathons',
  templateUrl: './lista-hackathons.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListaHackathonsComponent implements OnInit {

  @Input() hackathons: Hackathons
  constructor() { }

  ngOnInit() {
  }

}
