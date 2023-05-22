import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[lowerText]'
})
export class LowerTextDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('sss2');
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('sss');
    this.el.nativeElement.addEventListener('keyup', () => {
      console.log(this.el.nativeElement.innerText);
      this.el.nativeElement.innerText = this.el.nativeElement.innerText.toLocaleUpperCase() } );
  }

}
