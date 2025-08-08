import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { StackComponent } from './stack/stack.component';

@Component({
  selector: 'app-side-menu',
  imports: [StackComponent, ProyectosComponent, FooterComponent],
  templateUrl: './side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent { }
