import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  menuToggle: boolean = true;

  constructor(private global: GlobalService){}

  ngOnInit(){
    this.global.menuState.subscribe(state => this.menuToggle = state);
  }
}
