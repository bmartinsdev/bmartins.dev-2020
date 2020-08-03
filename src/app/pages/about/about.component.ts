import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  hovered: boolean = false;
  
  public mouseHoverToggle = (state) => {
    this.hovered = state;
  };
}
