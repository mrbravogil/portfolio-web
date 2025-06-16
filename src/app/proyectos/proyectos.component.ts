import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';


@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-10">
      <h2 class="text-3xl flex gap-5 items-center">
        <img src="assets/img/programming.png" class="w-10" alt=""> Proyectos
      </h2>

      <div *ngFor="let proyecto of proyectosList" class="flex flex-col gap-14">
        <img [src]="proyecto.photoUrl" class="rounded-4xl h-[40%]" alt="{{ proyecto.name }}">
        <h3 class="text-2xl">{{ proyecto.name }}</h3>
        <p class="font-lexend text-xl">{{ proyecto.descripcion }}</p>
        <div class="flex gap-10 text-xl">
          <a *ngIf="proyecto.linkgithub" [href]="proyecto.linkgithub" target="_blank">
            <button class="bg-purple-900 rounded-2xl p-3 border border-purple-400 hover:bg-black">Código</button>
          </a>
          <a *ngIf="proyecto.linkpreview" [href]="proyecto.linkpreview" target="_blank">
            <button class="bg-purple-900 rounded-2xl p-3 border border-purple-400 hover:bg-black">Ver</button>
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
      descripcion: 'Clon funcional del sitio Rotten Tomatoes con React Router y Tailwind con conexión a RapidApi.',
      photoUrl: 'assets/img/rotten-tomatoes-img.png',
      linkgithub: 'https://github.com/mrbravogil/Rotten-Tomatoes-Clone',
      linkpreview: 'https://rotten-tomatoes-clone.vercel.app/',
    },
    {
      id: 1,
      name: 'Trivial Customizable',
      descripcion: 'Juego de trivial personalizable por categorías.',
      photoUrl: 'assets/img/custom-trivial-img.png',
      linkgithub: 'https://github.com/mrbravogil/Trivial-Customizable',
      linkpreview: 'https://trivial-customizable.vercel.app/',
    }
  ];
}




