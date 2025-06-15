import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  imports: [],
  template: `
  <div class="flex flex-col gap-20">
      <h2 class="text-2xl">Stack Tecnológico</h2>
      <div class="flex flex-wrap gap-12 text-lg">
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/html-logo.png" class="w-5" alt="">HTML</button>
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/css-3-logo.png" class="w-5" alt="">CSS</button>
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/tailwind-logo.png" class="w-5" alt="">Tailwind</button>
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/java-logo.png" class="w-5" alt="">Java</button>
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/spring-logo.png" class="w-5" alt="">Spring</button>
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/javascript-logo.png" class="w-5" alt="">Javascript</button>
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/react-logo.png" class="w-5" alt="">React</button>
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/typescript-logo.png" class="w-5" alt="">Typescript</button>
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/angular-logo.png" class="w-5" alt="">Angular</button>
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/mysql-logo.png" class="w-5" alt="">MySQL</button>
        <button class="flex items-center justify-center gap-6 bg-gray-900 rounded-4xl p-6 "><img src="assets/img/git-logo.png" class="w-5" alt="">Git</button>

    </div>
    </div>
  `,
  styleUrl: './stack.component.css'
})
export class StackComponent {

}
