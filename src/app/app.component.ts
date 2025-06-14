import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from "./contacto/contacto.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";
import { StackComponent } from "./stack/stack.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PerfilComponent, StackComponent, ContactoComponent, ProyectosComponent],
  template: `
  <main class="w-screen min-h-screen bg-purple-950">

<section class="font-special text-white ">

<div class="grid grid-cols-1 lg:grid-cols-2 p-[8%] gap-30">

  <div class="flex flex-col gap-30 pr-[20%]">
<app-perfil></app-perfil>
<app-stack ></app-stack>
<app-contacto></app-contacto>
  </div>
  <app-proyectos></app-proyectos>

</div>
<section>
  <main>

  <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-web';
}
