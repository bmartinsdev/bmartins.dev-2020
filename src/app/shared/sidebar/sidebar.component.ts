import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { AuthService } from 'src/app/services/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor(
      private global: GlobalService, 
      public auth: AuthService,
      private router: Router) { }
      
  ngOnInit(): void {
    
  }
  
  goToRoute = function(route:string){
    this.global.toggleMenu();
    this.router.navigate([route]);
  }

}
