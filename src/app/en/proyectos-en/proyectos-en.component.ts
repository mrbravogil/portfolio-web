import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Proyecto } from '../models-en/proyecto.model';


@Component({
  selector: 'app-proyectos-en',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-15">
      <h2 class="text-3xl flex gap-5 items-center">
        <img src="assets/img/programming.png" class="w-10" alt=""> Projects
      </h2>

      <div *ngFor="let proyecto of proyectosList" class="flex flex-col gap-10">
        <img [src]="proyecto.photoUrl" class="rounded-4xl h-[40%]" alt="{{ proyecto.name }}">
        <h3 class="text-3xl">{{ proyecto.name }}</h3>
        <p class="font-lexend text-lg lg:text-xl">{{ proyecto.descripcion }}</p>
        <div class="flex gap-5 lg:gap-10 text-md lg:text-lg">
          <a *ngIf="proyecto.linkgithub" [href]="proyecto.linkgithub" target="_blank">
            <button class="w-[100px] bg-purple-900 rounded-2xl p-2 lg:p-3 border border-purple-400 cursor-pointer hover:bg-black">Code</button>
          </a>
          <a *ngIf="proyecto.linkpreview" [href]="proyecto.linkpreview" target="_blank">
            <button class="w-[100px] bg-purple-900 rounded-2xl p-2 lg:p-3 border border-purple-400 cursor-pointer hover:bg-black">View</button>
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
      descripcion: 'Functional clone of the Rotten Tomatoes site using React Router and Tailwind, connecting to data from the frontend. Backend version in Github repository using Node.js, Express, Prisma, and MySQL.',
      photoUrl: 'assets/img/rotten-tomatoes-img.png',
      linkgithub: 'https://github.com/mrbravogil/Rotten-Tomatoes-Clone',
      linkpreview: 'https://rotten-tomatoes-clone-maria-rosa-bravo-s-projects.vercel.app/',
    },
    {
      id: 1,
      name: 'Question Card - Customizable Trivial',
      descripcion: 'Developed a dynamic question card component that loads questions based on selected categories or uploaded files. It allows team-specific responses, real-time feedback, and saves results via backend integration for later review by educators. Built with React, utilizing React Router and Hooks for dynamic UI and state management, styled with Tailwind CSS. Zustand was used for global state handling. The backend was developed with Node.js and Express, with Prisma as the ORM and MySQL as the database.',
      photoUrl: 'assets/img/custom-trivial-img.png',
      linkgithub: 'https://github.com/mrbravogil/Trivial-Customizable',
      linkpreview: 'https://youtu.be/QwUGD5fFMAw',
    }
    
  ];
}




