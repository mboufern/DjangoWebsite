import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./shared/nav/nav.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ThreeRendererComponent } from './components/three-renderer/three-renderer.component';
import { StoreComponent } from "./components/store/store.component";
import { AdComponent } from "./components/ad/ad.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, WelcomeComponent, ThreeRendererComponent, StoreComponent, AdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';
}
