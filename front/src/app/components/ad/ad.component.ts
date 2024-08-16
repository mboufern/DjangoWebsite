import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.scss'
})
export class AdComponent implements OnInit, OnDestroy {

  public image: number = 0;

  private intervalId: any;

  ngOnInit() {
    this.startImageRotation();
  }

  ngOnDestroy() {
    this.clearImageRotation();
  }

  setImage(index: number) {
    this.image = index;
    this.clearImageRotation(); // Optional: reset the interval after manual change
    this.startImageRotation(); // Optional: restart the interval
  }

  private startImageRotation() {
    this.intervalId = setInterval(() => {
      this.image = (this.image + 1) % 3;
    }, 3500);
  }

  private clearImageRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
