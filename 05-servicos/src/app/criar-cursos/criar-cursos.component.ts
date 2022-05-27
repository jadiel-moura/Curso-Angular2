import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css'],
  providers: [CursosService]//Caso queira instâncias separadas (Vai gerar 2 console), caso não deve deixar no module
})
export class CriarCursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso(curso: string){
    this.cursosService.addCurso(curso);
  }

}
