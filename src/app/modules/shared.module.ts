import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatherModule } from "angular-feather";
import {
  Menu,
  ChevronDown,
  ChevronUp,
  Check,
  Filter,
  MoreVertical,
  X,
  Link,
  Github,
} from "angular-feather/icons";
import { MenuToggleComponent } from "../shared/menu-toggle/menu-toggle.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";

const icons = {
  ChevronDown,
  ChevronUp,
  Check,
  Filter,
  MoreVertical,
  Menu,
  Github,
  Link,
  X,
};

@NgModule({
  declarations: [MenuToggleComponent, SidebarComponent],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule, MenuToggleComponent, SidebarComponent],
})
export class SharedModule {}
