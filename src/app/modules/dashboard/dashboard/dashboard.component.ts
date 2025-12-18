import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContestCardComponent } from '../../../shared/components/contest-card/contest-card/contest-card.component'
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header/page-header.component';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state/empty-state.component';
import { Contest } from '../../../core/models/contest.model';
import { RouterLink } from "@angular/router";
import { PointsService } from '../../../services/points.service';
import { Observable } from 'rxjs';
import { ContestService } from '../../../services/contest.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, ContestCardComponent,
    PageHeaderComponent, EmptyStateComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private authService = inject(AuthService);
  private pointService = inject(PointsService);
  private contestService = inject(ContestService)

  balance = 0;
  activeContests: Contest[] = [];
  myContests: Contest[] = [];
  upcomingContests: Contest[] = [];
  wins = 0;

  ngOnInit(): void {
    this.loadBalance();
    this.loadContests();
    this.loadMyContests();
  }

  loadBalance() {
    this.pointService.getBalance().subscribe({
      next: (response) => { this.balance = response.balance },
      error: (error) => {
        console.error('Failed to load balance:', error);
      }
    });
  }
  loadContests() {
    this.contestService.getContests(1, 4, 'active').subscribe({
      next: (response) => {
        this.activeContests = response.items;
      },
      error: (error) => {
        console.error('Failed to load balance:', error);
      }
    });


    this.contestService.getContests(1, 4, 'upcoming').subscribe({
      next: (response) => {
        this.upcomingContests = response.items;
      },
      error: (error) => {
        console.error('Failed to load upcoming contests:', error);
      }
    });

  }
  loadMyContests() {

 this.contestService.getMyContests().subscribe({
      next: (contests) => {
        this.myContests = contests;
        this.calculateWins(contests);
      },
      error: (error) => {
        console.error('Failed to load my contests:', error);
      }
    });

  }

calculateWins(contests : Contest[]) {
 const currentUser = this.authService.getCurrentUser();
if (!currentUser) return;

this.wins = contests.filter ( c =>  c.winnerId ==  currentUser.userId ).length;


}


}
