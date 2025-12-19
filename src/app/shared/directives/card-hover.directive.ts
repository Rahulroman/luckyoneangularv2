import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHover]',
  standalone: true
})
export class CardHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

 @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'card-hover');
  }
  
@HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'card-hover');
  }

}
