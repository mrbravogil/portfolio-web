import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-en',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="flex p-10 text-xl absolute right-15 top-5 gap-3">
  <a routerLink="/en" class="hover:underline">EN</a>
  <p>/</p>
  <a routerLink="/" class="hover:underline">ES</a>
  </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
