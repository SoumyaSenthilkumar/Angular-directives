import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) { //unless is a property. set- its just a setter of the property which is a method which gets executed whenever the 
    //property changes and it ofcourse changes whenever it changes outside of this directive, 
      if(!condition) {
          this.vcRef.createEmbeddedView(this.templateRef);//createEmbeddedView method creates view in view container
      } else {
          this.vcRef.clear();
      }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
