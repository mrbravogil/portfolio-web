import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import es from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import '@angular/localize/init';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

registerLocaleData(es);
registerLocaleData(en);

(async () => {
  const locale = (localStorage.getItem('locale') as 'es' | 'en') ?? 'es';

  try {
    const res = await fetch(`assets/i18n/messages.${locale}.json`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`No se pudo cargar messages.${locale}.json`);
    const translations = await res.json();
    loadTranslations(translations as Record<string, string>);
    document.documentElement.lang = locale;
  } catch (err) {
    console.error('i18n runtime error:', err);
    document.documentElement.lang = 'es';
  }

  await bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...(appConfig.providers ?? []),
      { provide: LOCALE_ID, useValue: locale },
    ],
  });
})();
