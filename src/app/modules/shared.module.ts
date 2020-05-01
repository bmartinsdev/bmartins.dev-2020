import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Menu, ChevronDown, ChevronUp, Check, Filter, MoreVertical } from 'angular-feather/icons';
import { MenuToggleComponent } from '../shared/menu-toggle/menu-toggle.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

const icons = {
  ChevronDown,
  ChevronUp,
  Check,
  Filter,
  MoreVertical,
  Menu
};

@NgModule({
  declarations: [
    MenuToggleComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    AngularFireModule.initializeApp(environment.firebase, 'lughwebsite'),
    AngularFirestoreModule
  ],
  exports: [
    FeatherModule,
    MenuToggleComponent,
    SidebarComponent
  ]
})
export class SharedModule { }