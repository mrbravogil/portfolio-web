import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
  <div class="p-10 flex lg:items-center lg:justify-center border-t-4 border-t-purple-400">
    <p class="text-white text-lg p-10">Desarrollado con Angular y TailwindCSS</p>

</div>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
