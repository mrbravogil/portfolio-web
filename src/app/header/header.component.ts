import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <div class="flex p-10 text-xl absolute right-15 top-5 gap-3">
  <a href="" class="hover:underline">EN</a>
  <p>/</p>
  <a href="" class="hover:underline">ES</a>
  </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
