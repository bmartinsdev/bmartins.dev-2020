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
import { LoaderComponent } from "../shared/loader/loader.component";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";

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
  declarations: [MenuToggleComponent, SidebarComponent, LoaderComponent],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    LoadingBarRouterModule,
    LoadingBarModule,
  ],
  exports: [
    FeatherModule,
    MenuToggleComponent,
    SidebarComponent,
    LoadingBarRouterModule,
    LoadingBarModule,
    LoaderComponent,
  ],
})
export class SharedModule {}
