import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.sass']
})
export class MenuToggleComponent implements OnInit {

  constructor(private global: GlobalService) { }

  ngOnInit(): void {
  }

  toggleMenu = function(){
    this.global.toggleMenu();
  }

}
