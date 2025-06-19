import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  template: `
  <div class="flex flex-col gap-10 lg:gap-20 lg:pr[20%] ">
  <div class="flex flex-col gap-8">
        <img src="assets/img/mariarosabravo-img.jpeg" alt="Foto de perfil" class="w-45 h-45 lg:w-55 lg:h-55 rounded-full object-cover shadow-lg border-4 border-white">
      <h1 class="text-4xl lg:text-6xl">María Rosa Bravo Gil</h1>
      <p class="font-lexend text-xl lg:text-3xl"><b class="text-purple-400">Desarrolladora de software junior</b>, enfocada  en el Fullstack. Actualmente apostando por <b class="text-purple-200">Angular & React</b>,   mejorando cada día. De Fuengirola (Málaga), España 🇪🇸</p>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-wrap gap-5 lg:gap-8 text-md">
          <a href="https://www.linkedin.com/in/mrbravogil" target="_blank" class="w-[42%] lg:w-[15%] flex items-center justify-center gap-2 bg-gray-900 rounded-4xl p-3 lg:p-4 border border-purple-400 hover:bg-black">
            <img src="assets/img/linkedin-logo.png" class="w-5" alt="">LinkedIn
          </a>
          <a href="https://github.com/mrbravogil" target="_blank" class="w-[42%] lg:w-[15%] flex items-center justify-center gap-2 bg-gray-900 rounded-4xl p-3 lg:p-4 border border-purple-400 hover:bg-black">
            <img src="assets/img/github-logo.png" class="w-5" alt="">GitHub
          </a>
          <a href="mailto:mrbravogil@gmail.com" class="w-[42%] lg:w-[15%] flex items-center justify-center gap-2 bg-gray-900 rounded-4xl p-3 lg:p-4 border border-purple-400 hover:underline hover:bg-black">
            <img src="assets/img/mail-icon.png" class="w-5" alt="">Email
          </a>
          <a href="assets/docs/MariaRosaBravo-CV2025-es.pdf" download class="w-[42%] lg:w-[15%] flex items-center justify-center gap-2 bg-gray-900 rounded-4xl p-3 lg:p-4 border border-purple-400 hover:bg-black">
            <img src="assets/img/filedownload-icon.png" class="w-5" alt="">CV
          </a>
        </div>
      </div>
  </div>
      `,
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}
