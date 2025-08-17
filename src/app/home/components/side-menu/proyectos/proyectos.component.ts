import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Proyecto } from '../../../../interfaces/proyecto.interface';


@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
})

export class ProyectosComponent {
  proyectosList: Proyecto[] = [

    {
      id: 0,
      name: $localize`:@@proj.rotten-tomatoes.name:Rotten Tomatoes`,
      descripcion: $localize`:@@proj.rotten-tomatoes.desc:Clon funcional del sitio Rotten Tomatoes con React Router y Tailwind con conexión a datos desde el Frontend. Versión con Backend en repositorio Github usando Node.js, Express, Prisma y MySQL.`,
      photoUrl: 'assets/img/rotten-tomatoes-img.png',
      linkgithub: 'https://github.com/mrbravogil/Rotten-Tomatoes-Clone',
      linkpreview: 'https://rotten-tomatoes-clone-maria-rosa-bravo-s-projects.vercel.app/',
    },
    {
      id: 1,
      name: $localize`:@@proj.zen-app.name:Zen App`,
      descripcion: $localize`:@@proj.zen-app.desc:API de citas con un frontend en Angular y un backend en Spring Boot. Usa Supabase como base de datos y está desplegada en Render. Actualmente se ejecuta de forma local.`,
      photoUrl: 'assets/img/zen-app-img.png',
      linkgithub: 'https://github.com/mrbravogil/zen-app',
      linkpreview: '',
    },
    
    {
      id: 2,
      name:  $localize`:@@proj.trivial.name:Tarjeta Pregunta - Trivial Personalizable`,
      descripcion: $localize`:@@proj.trivial.desc:Componente dinámico de tarjeta de preguntas construido con React, Tailwind CSS, Node.js y Express, utilizando Prisma como ORM y MySQL como base de datos.`,
      photoUrl: 'assets/img/custom-trivial-img.png',
      linkgithub: 'https://github.com/mrbravogil/Trivial-Customizable',
      linkpreview: 'https://youtu.be/QwUGD5fFMAw',
    }
  ];
}




