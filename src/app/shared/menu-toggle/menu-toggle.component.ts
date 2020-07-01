import { Component, OnInit, HostBinding } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.sass']
})
export class MenuToggleComponent implements OnInit {
  menuToggle: boolean = true;
  @HostBinding('class') menuState: string = 'open';

  constructor(private global: GlobalService) { }

  ngOnInit(): void {
    this.global.menuState.subscribe(state => {
      this.menuToggle = state;
      this.menuState = this.menuToggle ? 'close' : 'open';
    });
  }

  toggleMenu = function(){
    this.global.toggleMenu();
  }

}
