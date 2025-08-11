import { Component, inject, LOCALE_ID, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvailableLocale, LocalService } from '../../../services/local.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
   localeService = inject(LocalService);
    currentLocale = signal(inject(LOCALE_ID));
  
    changeLocale(locale: AvailableLocale){
      console.log({ locale });
      this.localeService.changeLocale(locale);
  }

}
