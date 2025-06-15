import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  template: `
  <div class="flex flex-col gap-25">
      <h2 class="text-2xl flex gap-12 items-center"><img src="assets/img/message.png" class="w-20" alt="">Contacto</h2>
      <div class="w-full lg:w-[85%] lg:pl-40 flex flex-col gap-12 p-20 bg-purple-900 border border-purple-400 rounded-lg text-lg">
        <a href="mailto:mrbravogil@gmail.com" class="flex items-center gap-6 hover:underline">
          <img src="assets/img/mail-icon.png" class="w-5" alt="">mrbravogil&#64;gmail.com
        </a>
        <a href="https://www.linkedin.com/in/mrbravogil" target="_blank" class="flex items-center gap-6 hover:underline">
          <img src="assets/img/linkedin-logo.png" class="w-5" alt="">LinkedIn
        </a>
        
      </div>
    </div>
    `,
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
