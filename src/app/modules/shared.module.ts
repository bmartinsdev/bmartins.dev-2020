import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Menu, ChevronDown, ChevronUp, Check, Filter, MoreVertical, X } from 'angular-feather/icons';
import { MenuToggleComponent } from '../shared/menu-toggle/menu-toggle.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

const icons = {
  ChevronDown,
  ChevronUp,
  Check,
  Filter,
  MoreVertical,
  Menu,
  X
};

@NgModule({
  declarations: [
    MenuToggleComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule,
    MenuToggleComponent,
    SidebarComponent
  ]
})
export class SharedModule { }