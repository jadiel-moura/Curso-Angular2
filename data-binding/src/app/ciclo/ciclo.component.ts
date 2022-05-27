import { 
  Component,
  OnChanges,
  OnInit,
  DoCheck, 
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy, 
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, 
    AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;
  
  constructor() { 
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
