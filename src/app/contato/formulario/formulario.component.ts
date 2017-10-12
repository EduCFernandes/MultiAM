import { Component, OnInit } from '@angular/core';
import { Forms } from '../../form';
import {Router} from '@angular/router'

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  assuntos = ['Dúvidas', 'Cursos', 'Hackathons', 'Palestras', 'Workshops', 'Sugestões'];

  model = new Forms(18, 'Eduardo Fernandes', 'eduardo@email.com', this.assuntos[1], 'Quais são os métodos de pagamento?', '11 12345-6987');

  submitted = false;

  onSubmit() {

        var cont = 0;

        $("#form input").each(function(){
          if($(this).val() == ""){
              $(this).after(' <span>Essa informação deve ser preenchida! </span>');
              cont++;
          }
        });

        $("#form select").each(function(){
          if($(this).val() == ""){
              $(this).after(' <span>Essa informação deve ser preenchida! </span>');
              cont++;
          }
        });

        $("#form textarea").each(function(){
          if($(this).val() == ""){
              $(this).after(' <span>Essa informação deve ser preenchida! </span>');
              cont++;
          }
        });

        if(cont == 0){
            this.router.navigateByUrl('/sucesso');
            this.submitted = true;
            $("html, body").animate({ scrollTop: 0 }, "fast");
        }
  }


  get diagnostic() { return JSON.stringify(this.model); }

  novoForm(){this.model=new Forms(42, '', '', '', '','')}

}
