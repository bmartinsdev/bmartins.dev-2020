import { Directive, Input, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[blurred]",
  host: {
    "(input)": "update($event)",
  },
})
export class BlurredDirective {
  @Input() original: string;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnChanges(changes) {
    if (changes["original"] && changes["original"].currentValue) {
      this["original"] = changes["original"].currentValue;
    }
    const loaded = new Image();
    loaded.src = this.original;

    loaded.onload = () => {
      setTimeout(() => {
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          "src",
          this.original
        );
        this.renderer.removeClass(this.elementRef.nativeElement, "blurred");
      }, 1000);
    };
  }
}
