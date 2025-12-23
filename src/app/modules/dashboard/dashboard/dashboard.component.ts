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
  activeContests: Contest[] = [
     {
    id: 'C001',
    title: 'Mega Quiz Contest',
    description: 'Test your general knowledge and win exciting prizes.',
    bannerImage: 'quiz-banner.jpg',
    entryPoints: 50,
    maxParticipants: 500,
    currentParticipants: 320,
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-10'),
    status: 'active',
    createdBy: 'admin',
    createdAt: new Date('2024-12-20'),
    updatedAt: new Date('2025-01-02')
  },
  {
    id: 'C002',
    title: 'Coding Challenge',
    description: 'Solve coding problems and compete with others.',
    bannerImage: 'coding-banner.jpg',
    entryPoints: 100,
    maxParticipants: 300,
    currentParticipants: 300,
    startDate: new Date('2025-01-05'),
    endDate: new Date('2025-01-15'),
    status: 'completed',
    winnerId: 12,
    winnerUsername: 'dev_master',
    createdBy: 'admin',
    createdAt: new Date('2024-12-25'),
    updatedAt: new Date('2025-01-16')
  },
  {
    id: 'C003',
    title: 'Photography Contest',
    description: 'Show your photography skills.',
    bannerImage: 'photo-banner.jpg',
    entryPoints: 30,
    maxParticipants: 200,
    currentParticipants: 80,
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-02-10'),
    status: 'upcoming',
    createdBy: 'moderator',
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-10')
  },
  {
    id: 'C004',
    title: 'Fitness Challenge',
    description: 'Stay fit and earn rewards.',
    bannerImage: 'fitness-banner.jpg',
    entryPoints: 20,
    maxParticipants: 150,
    currentParticipants: 60,
    startDate: new Date('2025-01-03'),
    endDate: new Date('2025-01-20'),
    status: 'active',
    createdBy: 'coach01',
    createdAt: new Date('2024-12-28'),
    updatedAt: new Date('2025-01-05')
  },
  {
    id: 'C005',
    title: 'Startup Idea Pitch',
    description: 'Pitch your startup idea to win funding.',
    bannerImage: 'startup-banner.jpg',
    entryPoints: 200,
    maxParticipants: 100,
    currentParticipants: 45,
    startDate: new Date('2025-01-08'),
    endDate: new Date('2025-01-25'),
    status: 'cancelled',
    createdBy: 'admin',
    createdAt: new Date('2024-12-30'),
    updatedAt: new Date('2025-01-09')
  }
  ];
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
