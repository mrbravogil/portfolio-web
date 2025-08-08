import { Component } from '@angular/core';
import { PerfilComponent } from '../../home/components/perfil/perfil.component';
import { SideMenuComponent } from '../../home/components/side-menu/side-menu.component';
import { HeaderComponent } from "../../home/shared/header/header.component";


@Component({
  selector: 'app-home',
  imports: [PerfilComponent, SideMenuComponent, HeaderComponent],
  templateUrl: './home.component.html',
  
})
export class HomeComponent {

}
