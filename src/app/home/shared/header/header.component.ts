import { Component, inject } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private router = inject(Router);

  get isEnglish(): boolean {
    return typeof window !== 'undefined' && window.location.pathname.startsWith('/en');
  }

  goTo(locale: 'es' | 'en') {
    // Ruta actual (con posible /en delante)
    const url = this.router.url; // incluye query/fragment
    const withoutEn = url.replace(/^\/en(?=\/|$)/, ''); // quita el prefijo /en si existe

    // Construye destino manteniendo ruta, query y fragment
    const target = locale === 'en' ? `/en${withoutEn || '/'}` : (withoutEn || '/');

    if (target !== url) {
      this.router.navigateByUrl(target);
    }
  }

}
