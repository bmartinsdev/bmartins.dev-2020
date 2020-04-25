import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor(private global: GlobalService) { }

  ngOnInit(): void {
  }

  toggleMenu = function(){
    this.global.toggleMenu();
  }

}
