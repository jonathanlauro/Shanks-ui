import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class ToltipDirective {
  @Input() tooltip!: string;
  private tooltipElement!: HTMLElement;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.tooltipElement.innerText = this.tooltip || 'Default tooltip text'; // Usando o texto passado ou um texto padrão

    /**
     * styles tooltip
     */
    this.tooltipElement.style.position = 'absolute'
    this.tooltipElement.style.backgroundColor = '#333'
    this.tooltipElement.style.color= '#fff'
    this.tooltipElement.style.padding= '8px'
    this.tooltipElement.style.borderRadius= '4px'
    this.tooltipElement.style.fontSize= '14px'
    this.tooltipElement.style.zIndex= '999'


    this.tooltipElement.classList.add('tooltip');
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
    }
  }

}
