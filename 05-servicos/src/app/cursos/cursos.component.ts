import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]//Caso queira instâncias separadas (Vai gerar 2 console), caso não deve deixar no module
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor(_cursosService: CursosService) { 
    //this.cursosService = new CursosService();
    this.cursosService = _cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(

      //curso => console.log(curso)
      curso => this.cursos.push(curso)

      /*function(curso){//Informação igual acima
        console.log(curso);
      }*/
    );
  }

}
