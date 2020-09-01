import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[blurred]",
  host: {
    "(input)": "update($event)",
  },
})
export class BlurredDirective {
  @Input() original: string;
  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes) {
    if (changes["original"] && changes["original"].currentValue) {
      this["original"] = changes["original"].currentValue;
    }
    const loaded = new Image();
    loaded.src = this.original;

    loaded.onload = () => {
      setTimeout(() => {
        this.elementRef.nativeElement.src = loaded.src;
      }, 1000);
    };
  }
}
