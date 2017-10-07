import { Component, OnInit, Input } from '@angular/core';

import {Cursos} from './curso.model';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['../../app.component.css'],
})
export class ListaCursosComponent implements OnInit {
  @Input() cursos: Cursos
  constructor() { }

  ngOnInit() {
  }

}
