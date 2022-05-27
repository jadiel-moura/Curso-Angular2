import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guard';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

//import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
  //{ path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule' },
  { path: 'cursos', 
    loadChildren: () => import('../app/cursos/cursos.module').then(x => x.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  { path: 'alunos', 
    loadChildren: () => import('../app/alunos/alunos.module').then(x => x.AlunosModule) ,
    canActivate: [AuthGuard],
    //canActivateChild: [AlunosGuard]
    canLoad: [AuthGuard]
  },
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PaginaNaoEncontradaComponent}, //canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
