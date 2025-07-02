import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';


@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-15">
      <h2 class="text-3xl flex gap-5 items-center">
        <img src="assets/img/programming.png" class="w-10" alt=""> Proyectos
      </h2>

      <div *ngFor="let proyecto of proyectosList" class="flex flex-col gap-10">
        <img [src]="proyecto.photoUrl" class="rounded-4xl h-[40%]" alt="{{ proyecto.name }}">
        <h3 class="text-3xl">{{ proyecto.name }}</h3>
        <p class="font-lexend text-lg lg:text-xl">{{ proyecto.descripcion }}</p>
        <div class="flex gap-5 lg:gap-10 text-md lg:text-lg">
          <a *ngIf="proyecto.linkgithub" [href]="proyecto.linkgithub" target="_blank">
            <button class="w-[100px] bg-purple-900 rounded-2xl p-2 lg:p-3 border border-purple-400 cursor-pointer hover:bg-black">Código</button>
          </a>
          <a *ngIf="proyecto.linkpreview" [href]="proyecto.linkpreview" target="_blank">
            <button class="w-[100px] bg-purple-900 rounded-2xl p-2 lg:p-3 border border-purple-400 cursor-pointer hover:bg-black">Ver</button>
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrl: './proyectos.component.css'
})

export class ProyectosComponent {
  proyectosList: Proyecto[] = [
    {
      id: 0,
      name: 'Rotten Tomatoes',
      descripcion: 'Clon funcional del sitio Rotten Tomatoes con React Router y Tailwind con conexión a datos desde el Frontend. Versión con Backend en repositorio Github usando Node.js, Express, Prisma y MySQL.',
      photoUrl: 'assets/img/rotten-tomatoes-img.png',
      linkgithub: 'https://github.com/mrbravogil/Rotten-Tomatoes-Clone',
      linkpreview: 'https://rotten-tomatoes-clone-maria-rosa-bravo-s-projects.vercel.app/',
    },
    {
      id: 1,
      name: 'Tarjeta Pregunta - Trivial Personalizable',
      descripcion: 'Desarrollé un componente dinámico de tarjeta de preguntas que carga las preguntas según la categoría seleccionada o archivos personalizados subidos. Permite respuestas individualizadas por equipo, ofrece retroalimentación en tiempo real y guarda los resultados mediante integración con el backend, para su posterior revisión por parte del docente. Construido con React, utilizando React Router y Hooks para una interfaz dinámica y gestión del estado. Estilizado con Tailwind CSS. Zustand se usó para el manejo del estado global. El backend fue desarrollado con Node.js y Express, utilizando Prisma como ORM y MySQL como base de datos.',
      photoUrl: 'assets/img/custom-trivial-img.png',
      linkgithub: 'https://github.com/mrbravogil/Trivial-Customizable',
      linkpreview: 'https://youtu.be/QwUGD5fFMAw',
    }
  ];
}




