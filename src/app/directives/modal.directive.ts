import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appModalTemplate]',
})
export class ModalTemplateDirective {
  public viewContainerRef = inject(ViewContainerRef);
}
