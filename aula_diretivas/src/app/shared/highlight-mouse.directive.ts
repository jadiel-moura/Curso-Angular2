import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    /*this._renderer.setStyle(
      this._ElementRef.nativeElement,
      'background-color', 'yellow'
      );*/
      //ou
      this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*this._renderer.setStyle(
      this._ElementRef.nativeElement,
      'background-color', 'white'
    );*/
    //ou
    this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  //ou
  @HostBinding('style.backgroundColor') get setColor() {
    //adicionar código extra - se precisar de manipulação
    return this.backgroundColor;
  }
  private backgroundColor: string | undefined;

  constructor(
    /*private _ElementRef: ElementRef,
    private _renderer: Renderer2*/
    ) { }

}
