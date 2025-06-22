import { Component } from '@angular/core';


@Component({
  selector: 'app-perfil-en',
  standalone: true,
  template: `
  <div class="w-full max-w-screen-lg mx-auto px-4 flex flex-col gap-12 lg:gap-20 lg:pr-[10%]">

    <!-- Bloque de presentación -->
    <div class="flex flex-col lg:items-start gap-6 lg:text-left">
      <img src="assets/img/mariarosabravo-img.jpeg"
          alt="Foto de perfil"
          class="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white shadow-lg" />

      <h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold">María Rosa Bravo Gil</h1>

      <p class="font-lexend text-base sm:text-lg lg:text-2xl leading-relaxed max-w-2xl">
        <b class="text-purple-400">Junior software developer</b>, focused on Fullstack.
        Currently working with <b class="text-purple-200">Angular & React</b>,
        improving every day. From Fuengirola (Málaga), Spain 🇪🇸
      </p>
    </div>

    <!-- Enlaces -->
    <div class="flex flex-wrap gap-4 lg:justify-start">
      <a href="https://www.linkedin.com/in/mrbravogil" target="_blank"
         class="flex items-center gap-2 px-5 py-3 text-sm sm:text-base lg:text-lg bg-gray-900 rounded-3xl border border-purple-400 hover:bg-black transition">
        <img src="assets/img/linkedin-logo.png" class="w-5 sm:w-6" alt="">LinkedIn
      </a>
      <a href="https://github.com/mrbravogil" target="_blank"
         class="flex items-center gap-2 px-5 py-3 text-sm sm:text-base lg:text-lg bg-gray-900 rounded-3xl border border-purple-400 hover:bg-black transition">
        <img src="assets/img/github-logo.png" class="w-5 sm:w-6" alt="">GitHub
      </a>
      <a href="mailto:mrbravogil@gmail.com"
         class="flex items-center gap-2 px-5 py-3 text-sm sm:text-base lg:text-lg bg-gray-900 rounded-3xl border border-purple-400 hover:bg-black hover:underline transition">
        <img src="assets/img/mail-icon.png" class="w-5 sm:w-6" alt="">Email
      </a>
      <a href="assets/docs/MariaRosaBravo-CV2025-es.pdf" download
         class="flex items-center gap-2 px-5 py-3 text-sm sm:text-base lg:text-lg bg-gray-900 rounded-3xl border border-purple-400 hover:bg-black transition">
        <img src="assets/img/filedownload-icon.png" class="w-5 sm:w-6" alt="">CV
      </a>
    </div>

  </div>
  `,
  styleUrl: './perfil.component.css',
})
export class PerfilComponent {}
