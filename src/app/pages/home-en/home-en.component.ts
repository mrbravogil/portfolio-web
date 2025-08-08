import { Component } from '@angular/core';
import { FooterComponent } from '../../home/en/footer-en/footer-en.component';
import { HeaderComponent } from "../../home/en/header-en/header-en.component";
import { PerfilComponent } from "../../home/en/perfil-en/perfil-en.component";
import { ProyectosComponent } from "../../home/en/proyectos-en/proyectos-en.component";
import { StackComponent } from "../../home/en/stack-en/stack.component";

@Component({
  selector: 'app-home-en',
  imports: [HeaderComponent, PerfilComponent, StackComponent, ProyectosComponent, FooterComponent],
  template: `
  <main class="w-full min-h-screen bg-gradient-to-b from-purple-950 to-gray-900 font-special text-white relative">
  <header class="w-full"><app-header-en></app-header-en></header>
  <section class="">
    <div class="grid grid-cols-1 lg:grid-cols-2 p-[8%] lg:p-[8%] gap-10">
      <div class="flex flex-col gap-15 lg:pr-[20%]">
        <app-perfil-en></app-perfil-en>
        <app-stack-en></app-stack-en>
      </div>
        <app-proyectos-en></app-proyectos-en>
    </div>
  </section>
  <footer>
        <app-footer-en></app-footer-en>
  </footer>
</main>
    
  `,
})
export class HomeEnComponent {

}
