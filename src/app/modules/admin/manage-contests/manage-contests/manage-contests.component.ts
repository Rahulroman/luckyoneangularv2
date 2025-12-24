import { Component } from '@angular/core';
import { Contest } from '../../../../core/models/contest.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-manage-contests',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,PageHeaderComponent,ConfirmDialogComponent],
  templateUrl: './manage-contests.component.html',
  styleUrl: './manage-contests.component.scss',
})
export class ManageContestsComponent {
  contests: Contest[] = [{
    id: 'C001',
    title: 'Mega Coding Contest',
    description: 'Solve coding problems and win exciting prizes.',
    bannerImage: 'banner1.jpg',
    entryPoints: 50,
    maxParticipants: 500,
    currentParticipants: 120,
    startDate: new Date('2025-01-10'),
    endDate: new Date('2025-01-20'),
    status: 'upcoming',
    createdBy: 'admin',
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date('2024-12-05')
  },
  {
    id: 'C002',
    title: 'UI Design Challenge',
    description: 'Show your creativity with modern UI designs.',
    bannerImage: 'banner2.jpg',
    entryPoints: 30,
    maxParticipants: 300,
    currentParticipants: 300,
    startDate: new Date('2024-12-01'),
    endDate: new Date('2024-12-10'),
    status: 'completed',
    winnerId: 101,
    winnerUsername: 'designMaster',
    createdBy: 'moderator',
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date('2024-12-10')
  },
  {
    id: 'C003',
    title: 'Bug Bounty Contest',
    description: 'Find bugs and earn rewards.',
    entryPoints: 20,
    maxParticipants: 200,
    currentParticipants: 85,
    startDate: new Date('2024-12-15'),
    endDate: new Date('2025-01-05'),
    status: 'active',
    createdBy: 'securityTeam',
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date('2024-12-18')
  },
  {
    id: 'C004',
    title: 'Photography Contest',
    description: 'Capture moments and win prizes.',
    bannerImage: 'banner4.jpg',
    entryPoints: 10,
    maxParticipants: 150,
    currentParticipants: 40,
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-02-15'),
    status: 'upcoming',
    createdBy: 'eventsTeam',
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-05')
  },
  {
    id: 'C005',
    title: 'Trivia Night',
    description: 'Test your general knowledge.',
    entryPoints: 5,
    maxParticipants: 100,
    currentParticipants: 0,
    startDate: new Date('2024-11-01'),
    endDate: new Date('2024-11-01'),
    status: 'cancelled',
    createdBy: 'admin',
    createdAt: new Date('2024-10-15'),
    updatedAt: new Date('2024-10-20')
  }];
  
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;

  searchQuery = '';
  selectedStatus = '';

  selectedContest: Contest | null = null;
  showDeleteDialog = false;

  deleteContest(contest: Contest): void {
    this.selectedContest = contest;
    this.showDeleteDialog = true;
  }

  onDeleteCancel(): void {
    this.showDeleteDialog = false;

  }
onDeleteConfirm(value : string): void {
   alert('Delete cancelled' + value);
}
}
