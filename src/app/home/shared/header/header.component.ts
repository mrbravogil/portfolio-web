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
   // Inyecta la instancia del servicio LocalService para gestionar el idioma
   localeService = inject(LocalService);

   // Crea un signal con el valor del LOCALE_ID actual (idioma en uso)
   currentLocale = signal(inject(LOCALE_ID));
  
   // Método para cambiar el idioma
   changeLocale(locale: AvailableLocale) {
      // Muestra en consola el idioma que se va a establecer
      console.log({ locale });
      // Llama al servicio para guardar el nuevo idioma y recargar la app
      this.localeService.changeLocale(locale);
   }
}
