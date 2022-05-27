import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  /*styles: [
    `
      .highlight {
        background-color: blue;
        font-weight: bold;
      }
    `
  ]*/
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://jadiel.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/500/400/?2';

  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  pessoa: any = {
    nome: 'def',
    idade: 20
  }
  nomeDoCurso: string = 'Angular';
  valorInicial = 15;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoclicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver =!this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
