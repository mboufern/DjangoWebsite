import { Component } from '@angular/core';
import { ThreeRendererComponent } from "../three-renderer/three-renderer.component";


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ThreeRendererComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
