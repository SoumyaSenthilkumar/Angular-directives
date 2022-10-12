import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input  } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';//appBetterHighlight- set this as an alias for the highlight color.
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  //renderer usage for DOM access.Angular Renderer class to change the style of a HTML element
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
    //Of course, you can do more than simply change the styling of an element via setStyle()
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
    //mouseenter is one of the events supported by the DOM elements.
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');  
    this.backgroundColor = this.defaultColor;
  }
}
