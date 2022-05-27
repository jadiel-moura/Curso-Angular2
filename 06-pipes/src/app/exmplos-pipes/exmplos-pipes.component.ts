import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-exmplos-pipes',
  templateUrl: './exmplos-pipes.component.html',
  styleUrls: ['./exmplos-pipes.component.css']
})
export class ExmplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learnin JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glgjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string = '';
  //filtro: string; //O filtro não aceita com string undefined
  //teve que ser adiciona a verificação do valor vazio nos 2 tipos

  addCurso(valor: string){
    this.livros.push(valor);
    console.log(this.livros);
  }

  //obterCursos(): string[]{ //quando não tem no html
  obterCursos(){

    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });

  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  /* Não consegui colocar para funcionar - interval deve ter mudado no angular11
  valorAsync2 = Observable.interval(2000)
  .map(valor => 'Valor assíncrono 2');
  */

  

  constructor() { }

  ngOnInit(): void {
  }

}
