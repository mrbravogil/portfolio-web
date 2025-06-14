import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  imports: [],
  template: `
  <div class="flex flex-col gap-20">
        <h2 class="text-6xl flex gap-12 items-center"><img src="assets/img/programming.png" class="w-20" alt="">Proyectos</h2>

        <div class="flex flex-col gap-12">
          <img src="assets/img/rotten-tomatoes-img.png" class="rounded-4xl" alt="">
          <h2 class="text-5xl">Rotten Tomatoes</h2>
          <p class="font-lexend text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium repellendus deleniti numquam itaque quibusdam aliquam odit ducimus, nobis quia necessitatibus, non laudantium fugiat consectetur eius incidunt ab delectus, laboriosam dolore!</p>
          <div class="flex gap-12 text-4xl">
            <a href="https://github.com/mrbravogil/Rotten-Tomatoes-Clone" target="_blank"><button class="bg-purple-900 rounded-4xl p-5 border border-purple-400 hover:bg-black">Código</button></a>
            <a href="" target="_blank"><button class="bg-purple-900 rounded-4xl p-5 border border-purple-400 hover:bg-black">Ver</button></a>
          </div>
          </div>

        <div class="flex flex-col gap-12">
          <img src="assets/img/custom-trivial-img.png" class="rounded-4xl" alt="">
          <h2 class="text-5xl">Trivial Customizable</h2>
          <p class="font-lexend text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium repellendus deleniti numquam itaque quibusdam aliquam odit ducimus, nobis quia necessitatibus, non laudantium fugiat consectetur eius incidunt ab delectus, laboriosam dolore!</p>
          <div class="flex gap-12 text-4xl">
            <button class="bg-purple-900 rounded-4xl p-5 border border-purple-400">Código</button>
            <button class="bg-purple-900 rounded-4xl p-5 border border-purple-400">Ver</button>
          </div>
          </div>
        
          
            <div class="flex flex-col gap-12">
              <img src="assets/img/rotten-tomatoes-img.png" class="rounded-4xl" alt="">
              <h2 class="text-5xl">Rotten Tomatoes</h2>
              <p class="font-lexend text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium repellendus deleniti numquam itaque quibusdam aliquam odit ducimus, nobis quia necessitatibus, non laudantium fugiat consectetur eius incidunt ab delectus, laboriosam dolore!</p>
              <div class="flex gap-12 text-4xl">
                <button class="bg-purple-900 rounded-4xl p-5 border border-purple-400">Código</button>
                <button class="bg-purple-900 rounded-4xl p-5 border border-purple-400">Ver</button>
              </div>
              </div>
          
      </div>`,
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

}
