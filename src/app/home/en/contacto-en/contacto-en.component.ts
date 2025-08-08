import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto-en',
  standalone: true,
  imports: [],
  template: `
  <div class="w-full flex flex-col gap-10 lg:gap-20">
      <h2 class="text-3xl flex gap-4 items-center">
        <img src="assets/img/message.png" class="w-10" alt="">Contact
      </h2>
      <div class="w-full lg:w-[45%] lg:pl-[8%] flex flex-col gap-8 p-5 lg:p-7 bg-purple-900 border border-purple-400 rounded-lg text-md">
        <div class="flex items-center">
          <a href="mailto:mrbravogil@gmail.com" class="flex items-center gap-4 hover:underline">
            <img src="assets/img/mail-icon.png" class="w-8" alt="">mrbravogil&#64;gmail.com
          </a>
        </div>
        <div class="flex items">
        <a href="https://www.linkedin.com/in/mrbravogil" target="_blank" class="flex items-center gap-4 hover:underline">
            <img src="assets/img/linkedin-logo.png" class="w-8" alt="">LinkedIn
          </a>
        </div>
      </div>
    </div>
    `,
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  
}
