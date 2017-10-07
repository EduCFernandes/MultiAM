import { Component, OnInit, Input } from '@angular/core';

import {Palestras} from './palestra.model';

@Component({
  selector: 'app-lista-palestras',
  templateUrl: './lista-palestras.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListaPalestrasComponent implements OnInit {

  @Input() palestras: Palestras
  constructor() { }

  ngOnInit() {
  }

}
