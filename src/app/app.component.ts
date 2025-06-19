import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";
import { StackComponent } from "./stack/stack.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PerfilComponent, StackComponent, ProyectosComponent, FooterComponent, HeaderComponent],
  template: `
  <main class="w-full min-h-screen bg-gradient-to-b from-purple-950 to-gray-900 font-special text-white relative">
  <header class="w-full"><app-header></app-header></header>
  <section class="">
    <div class="grid grid-cols-1 lg:grid-cols-2 p-[8%] lg:p-[8%] gap-10">
      <div class="flex flex-col gap-15 lg:pr-[20%]">
        <app-perfil></app-perfil>
        <app-stack></app-stack>
      </div>
      <app-proyectos></app-proyectos>
    </div>
  </section>
  <footer>
    <app-footer></app-footer>
  </footer>
</main>
    

  <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-web';
}
