import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full max-w-screen-lg mx-auto px-4 flex flex-col gap-10 lg:gap-16">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold">Stack Tecnológico</h2>

      <div class="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 font-lexend text-sm sm:text-base lg:text-lg">
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/html-logo.png" class="w-5 sm:w-6" alt="">HTML
        </button>
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/css-3-logo.png" class="w-5 sm:w-6" alt="">CSS
        </button>
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/tailwind-logo.png" class="w-5 sm:w-6" alt="">Tailwind
        </button>
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/java-logo.png" class="w-5 sm:w-6" alt="">Java
        </button>
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/spring-logo.png" class="w-5 sm:w-6" alt="">Spring
        </button>
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/javascript-logo.png" class="w-5 sm:w-6" alt="">JavaScript
        </button>
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/react-logo.png" class="w-5 sm:w-6" alt="">React
        </button>
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/typescript-logo.png" class="w-5 sm:w-6" alt="">TypeScript
        </button>
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/angular-logo.png" class="w-5 sm:w-6" alt="">Angular
        </button>
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/mysql-logo.png" class="w-5 sm:w-6" alt="">MySQL
        </button>
        <button class="w-[47%] sm:w-[30%] lg:w-[18%] flex items-center justify-center gap-2 sm:gap-4 bg-gray-900 rounded-3xl p-3 lg:p-4 border border-purple-400 hover:bg-black transition">
          <img src="assets/img/git-logo.png" class="w-5 sm:w-6" alt="">Git
        </button>
      </div>
    </div>
  `,
  styleUrl: './stack.component.css'
})
export class StackComponent {}
