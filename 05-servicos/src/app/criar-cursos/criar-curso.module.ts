import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursosComponent } from './criar-cursos.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursosComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursosComponent],
  //providers: [CursosService]
})
export class CriarCursoModule { }
