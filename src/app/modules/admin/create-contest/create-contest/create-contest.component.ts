import { Component } from '@angular/core';
import { CreateContestRequest } from '../../../../core/models/contest.model';
import { Router, RouterLink } from '@angular/router';
import { NotificationService } from '../../../../services/notification.service';
import { LoadingService } from '../../../../services/loading.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state/empty-state.component';

@Component({
  selector: 'app-create-contest',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,PageHeaderComponent,EmptyStateComponent],
  templateUrl: './create-contest.component.html',
  styleUrl: './create-contest.component.scss'
})
export class CreateContestComponent {
  constructor(private router : Router , private notificationService : NotificationService  ,private loadingService : LoadingService){}

    contestData: CreateContestRequest = {
    title: '',
    description: '',
    entryPoints: 0,
    maxParticipants: 0,
    startDate: new Date(),
    endDate: new Date()
  };




    bannerImage = '';
  isLoading = false;

  canSubmit(): boolean {
    return (
      !!this.contestData.title &&
      !!this.contestData.description &&
      this.contestData.entryPoints > 0 &&
      this.contestData.maxParticipants > 0 &&
      new Date(this.contestData.startDate) < new Date(this.contestData.endDate)
    );
  }

  createContest(): void {
    if (!this.canSubmit()) {
      this.notificationService.showError('Please fill in all required fields correctly');
      return;
    }

    this.isLoading = true;
    this.loadingService.show();

    const contestData = {
      ...this.contestData,
      bannerImage: this.bannerImage || undefined
    };

    // this.contestService.createContest(contestData).subscribe({
    //   next: (contest) => {
    //     this.notificationService.showSuccess('Contest created successfully!');
    //     this.router.navigate(['/admin/manage-contests']);
    //   },
    //   error: (error) => {
    //     this.notificationService.showError(error.message || 'Failed to create contest');
    //   },
    //   complete: () => {
    //     this.isLoading = false;
    //     this.loadingService.hide();
    //   }
    // });
  }

  cancel(): void {
    this.router.navigate(['/admin']);
  }  

}
