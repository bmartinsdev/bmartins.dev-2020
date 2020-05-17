import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private menuToggle = new BehaviorSubject<boolean>(false);
  menuState = this.menuToggle.asObservable();
  
  toggleMenu(){
    this.menuToggle.next(!this.menuToggle.value);
  }
}
