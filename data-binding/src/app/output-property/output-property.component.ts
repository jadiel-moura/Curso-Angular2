import { Component, Input, OnInit, InputDecorator, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  //outputs: ['mudouValor'],
})

export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput! : ElementRef;

  incrementa(){
    //console.log(this.campoValorInput.nativeElement.value++);
    this.campoValorInput.nativeElement.value++;
    //this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.campoValorInput.nativeElement.value++;
    //this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
