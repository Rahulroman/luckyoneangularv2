import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss'
})
export class CountdownTimerComponent {

    @Input() targetDate: Date = new Date();
    @Input() label: string = 'Time Remaining';
     days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;


   private subscription?: Subscription;

   ngOnInit(){
     this.updateCountdown();
     this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
   }

ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

   private updateCountdown(): void {
    const now = new Date().getTime();
    const target = new Date(this.targetDate).getTime();
    const difference = target - now;

    if (difference <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }

    this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }

    padZero(value: number): string {
    return value.toString().padStart(2, '0');
  }


}
