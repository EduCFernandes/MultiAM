import { Component, OnInit } from '@angular/core';
import { Forms } from '../../form';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  assuntos = ['Dúvidas', 'Cursos', 'Hackathons', 'Palestras', 'Workshops', 'Sugestões'];

  model = new Forms(18, 'Eduardo Fernandes', 'eduardo@email.com', this.assuntos[1], 'Quais são os métodos de pagamento?', '11 12345-6987');

  submitted = false;

  onSubmit() { this.submitted = true;}

  get diagnostic() { return JSON.stringify(this.model); }

  novoForm(){this.model=new Forms(42, '', '', '', '','')}

}
