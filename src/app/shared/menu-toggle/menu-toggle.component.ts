import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.sass']
})
export class MenuToggleComponent implements OnInit {
  menuToggle: boolean = true;

  constructor(private global: GlobalService) { }

  ngOnInit(): void {
    this.global.menuState.subscribe(state => this.menuToggle = state);
  }

  toggleMenu = function(){
    this.global.toggleMenu();
  }

}
