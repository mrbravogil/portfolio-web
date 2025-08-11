import { Component, inject, LOCALE_ID, signal } from '@angular/core';
import { PerfilComponent } from '../../home/components/perfil/perfil.component';
import { SideMenuComponent } from '../../home/components/side-menu/side-menu.component';
import { HeaderComponent } from "../../home/shared/header/header.component";
import { AvailableLocale, LocalService } from '../../services/local.service';


@Component({
  selector: 'app-home',
  imports: [PerfilComponent, SideMenuComponent, HeaderComponent],
  templateUrl: './home.component.html',
  
})
export class HomeComponent {
  localeService = inject(LocalService);
  currentLocale = signal(inject(LOCALE_ID));

  changeLocale(locale: AvailableLocale){
    console.log({ locale });
    this.localeService.changeLocale(locale);
  }

}
