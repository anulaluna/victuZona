import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from '@angular/core';
@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {
  private isOpen = false;
  constructor(private _el: ElementRef) {}

  @HostListener('click')
  open() {
    if (this.isOpen === false) {
      this.isOpen = true;
      this._el.nativeElement.querySelector('.collapse').classList.add('show');
    } else {
      this.isOpen = false;
      this._el.nativeElement
        .querySelector('.collapse')
        .classList.remove('show');
    }
  }
}
