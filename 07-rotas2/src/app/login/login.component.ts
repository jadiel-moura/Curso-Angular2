import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    nome: '',
    senha: ''
  };

  //private usuario: Usuario = new Usuario(); //Não consegui com private buscando do usuario.ts

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

}
