import { Injectable, signal } from '@angular/core';

// Definimos un tipo que restringe el idioma disponible a 'es' o 'en'
export type AvailableLocale = 'es' | 'en';

@Injectable({ providedIn: 'root' }) // Servicio singleton accesible en toda la app
export class LocalService {
    
    // Signal reactivo que almacena el idioma actual, por defecto 'es'
    private currentLocale = signal<AvailableLocale>('es');

    constructor() {
        // Al iniciar, leemos el idioma guardado en localStorage (si existe)
        // y lo establecemos en el signal; si no hay nada, usamos 'es'
        this.currentLocale.set(
            (localStorage.getItem('locale') as AvailableLocale) ?? 'es'
        );
    }

    // Getter para obtener el valor actual del idioma
    get getLocale() {
        return this.currentLocale();
    }

    // Cambia el idioma de la aplicación
    changeLocale(locale: AvailableLocale) {
        // Guardamos el nuevo idioma en localStorage
        localStorage.setItem('locale', locale);
        // Actualizamos el signal para reflejar el cambio
        this.currentLocale.set(locale);
        // Recargamos la página para aplicar las traducciones
        window.location.reload();
    }
}
