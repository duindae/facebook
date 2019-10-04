import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

import debug from 'debug';

const console = {
  log: debug('facebook:highlight:log'),
  warn: debug('facebook:highlight:warn'),
  error: debug('facebook:highlight:error')
};

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseover') mouseoverHandler() {
    console.log('mouseover');
    const $element = this.element.nativeElement;
    this.renderer.addClass($element, 'border');
    this.renderer.addClass($element, 'border-primary');
  }

  @HostListener('mouseleave') mouseleaveHandler() {
    console.log('mouseleave');
    const $element = this.element.nativeElement;
    this.renderer.removeClass($element, 'border');
    this.renderer.removeClass($element, 'border-primary');
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }


}
