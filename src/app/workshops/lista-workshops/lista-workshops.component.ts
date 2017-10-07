import { Component, OnInit, Input } from '@angular/core';

import {Workshops} from './workshop.model';

@Component({
  selector: 'app-lista-workshops',
  templateUrl: './lista-workshops.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListaWorkshopsComponent implements OnInit {

  @Input() workshops: Workshops

  constructor() { }

  ngOnInit() {
  }

}
