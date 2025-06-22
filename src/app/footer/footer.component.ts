import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <div class="p-10 mt-15 flex items-center justify-center border-t-4 border-t-purple-400">
    <p class="text-white text-center text-md lg:text-lg lg:p-10">Desarrollado con Angular y TailwindCSS</p>

</div>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
