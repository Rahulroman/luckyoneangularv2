import { Component } from '@angular/core';
import { Contest } from '../../../../core/models/contest.model';
import { ContestService } from '../../../../services/contest.service';
import { PaginatedResponse } from '../../../../core/models/api-response.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state/empty-state.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { ContestCardComponent } from '../../../../shared/components/contest-card/contest-card/contest-card.component';

@Component({
  selector: 'app-contest-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EmptyStateComponent, PageHeaderComponent, ContestCardComponent],
  templateUrl: './contest-list.component.html',
  styleUrl: './contest-list.component.scss'
})
export class ContestListComponent {

  // contests: Contest[] = [{
  //     id: 'LL-001',
  //     title: 'Lucky Lottery Bonanza',
  //     description: 'Enter the lucky draw and stand a chance to win exciting rewards.',
  //     bannerImage: 'https://example.com/banners/lucky1.jpg',
  //     entryPoints: 10,
  //     maxParticipants: 1000,
  //     currentParticipants: 450,
  //     startDate: new Date('2025-01-01'),
  //     endDate: new Date('2025-01-15'),
  //     status: 'active',
  //     createdBy: 'admin',
  //     createdAt: new Date('2024-12-20'),
  //     updatedAt: new Date('2025-01-05'),
  //   },
  //   {
  //     id: 'LL-002',
  //     title: 'New Year Lucky Lottery',
  //     description: 'Celebrate the new year with a special lucky lottery contest.',
  //     bannerImage: 'https://example.com/banners/lucky2.jpg',
  //     entryPoints: 20,
  //     maxParticipants: 2000,
  //     currentParticipants: 2000,
  //     startDate: new Date('2024-12-25'),
  //     endDate: new Date('2025-01-01'),
  //     status: 'completed',
  //     winnerId: 102,
  //     winnerUsername: 'luckyStar',
  //     createdBy: 'admin',
  //     createdAt: new Date('2024-12-10'),
  //     updatedAt: new Date('2025-01-01'),
  //   },
  //   {
  //     id: 'LL-003',
  //     title: 'Weekly Lucky Draw',
  //     description: 'Join the weekly lottery and test your luck every week.',
  //     bannerImage: 'https://example.com/banners/lucky3.jpg',
  //     entryPoints: 5,
  //     maxParticipants: 500,
  //     currentParticipants: 120,
  //     startDate: new Date('2025-02-01'),
  //     endDate: new Date('2025-02-07'),
  //     status: 'upcoming',
  //     createdBy: 'system',
  //     createdAt: new Date('2025-01-20'),
  //     updatedAt: new Date('2025-01-20'),
  //   },
  //   {
  //     id: 'LL-004',
  //     title: 'Mega Lucky Lottery',
  //     description: 'A mega lottery with bigger prizes and more winners.',
  //     bannerImage: 'https://example.com/banners/lucky4.jpg',
  //     entryPoints: 50,
  //     maxParticipants: 5000,
  //     currentParticipants: 3200,
  //     startDate: new Date('2025-01-10'),
  //     endDate: new Date('2025-02-10'),
  //     status: 'active',
  //     createdBy: 'admin',
  //     createdAt: new Date('2024-12-28'),
  //     updatedAt: new Date('2025-01-10'),
  //   },
  //   {
  //     id: 'LL-005',
  //     title: 'Flash Lucky Lottery',
  //     description: 'A short-time flash lottery with instant excitement.',
  //     bannerImage: 'https://example.com/banners/lucky5.jpg',
  //     entryPoints: 15,
  //     maxParticipants: 300,
  //     currentParticipants: 300,
  //     startDate: new Date('2025-01-03'),
  //     endDate: new Date('2025-01-04'),
  //     status: 'cancelled',
  //     createdBy: 'admin',
  //     createdAt: new Date('2025-01-01'),
  //     updatedAt: new Date('2025-01-03'),
  //   },];
  contests: Contest[] = [];
currentPage = 1;
 pageSize = 12;
  totalPages = 0;
  totalItems = 0;
  selectedStatus = '';
  sortBy = 'startDate';

   constructor(private contestService: ContestService) {}

   ngOnInit(){
     this.loadContests();
   }

loadContests(){

 
  //  this.contestService.getContests(this.currentPage, this.pageSize, this.selectedStatus)
  //     .subscribe({
  //       next: (response: PaginatedResponse<Contest>) => {
  //         this.contests = response.items;
  //         this.totalItems = response.total;
  //         this.totalPages = response.totalPages;
  //       },
  //       error: (error) => {
  //         console.error('Failed to load contests:', error);
  //       }
  //     });

}

 nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadContests();
    }
  }
prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadContests();
    }
  }
  resetFilters(): void {
    this.selectedStatus = '';
    this.sortBy = 'startDate';
    this.currentPage = 1;
    this.loadContests();
  }




}
