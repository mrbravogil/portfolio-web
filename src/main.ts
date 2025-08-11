// Importa la función para registrar datos de locale (números, fechas, moneda...)
import { registerLocaleData } from '@angular/common';
// Importa los datos de locale para inglés
import en from '@angular/common/locales/en';
// Importa los datos de locale para español
import es from '@angular/common/locales/es';
// Token que indica el locale actual a Angular
import { LOCALE_ID } from '@angular/core';
// Función para cargar traducciones en tiempo de ejecución
import { loadTranslations } from '@angular/localize';
// Inicializa el sistema de localización de Angular
import '@angular/localize/init';
// Función para iniciar la aplicación Angular
import { bootstrapApplication } from '@angular/platform-browser';
// Componente raíz de la aplicación
import { AppComponent } from './app/app.component';
// Configuración general de la app
import { appConfig } from './app/app.config';

// Registramos los datos de locale para español e inglés
registerLocaleData(es);
registerLocaleData(en);

(async () => {
  // Obtenemos el idioma guardado en localStorage o usamos 'es' por defecto
  const locale = (localStorage.getItem('locale') as 'es' | 'en') ?? 'es';

  try {
    // Cargamos el archivo de traducciones correspondiente al idioma
    const res = await fetch(`assets/i18n/messages.${locale}.json`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`No se pudo cargar messages.${locale}.json`);
    
    // Convertimos la respuesta a JSON
    const translations = await res.json();
    
    // Cargamos las traducciones en Angular Localize
    loadTranslations(translations as Record<string, string>);
    
    // Actualizamos el atributo lang del <html> para accesibilidad y SEO
    document.documentElement.lang = locale;
  } catch (err) {
    // Si algo falla, mostramos error y usamos 'es' como idioma por defecto
    console.error('i18n runtime error:', err);
    document.documentElement.lang = 'es';
  }

  // Iniciamos la aplicación con la configuración y el locale seleccionado
  await bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...(appConfig.providers ?? []),
      { provide: LOCALE_ID, useValue: locale }, // Inyecta el idioma a Angular
    ],
  });
})();
