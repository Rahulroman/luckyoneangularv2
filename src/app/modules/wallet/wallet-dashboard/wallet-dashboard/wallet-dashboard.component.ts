import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state/empty-state.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { PointsDisplayComponent } from '../../../../shared/components/points-display/points-display/points-display.component';
import { PointTransaction } from '../../../../core/models/points.model';
import { PointsService } from '../../../../services/points.service';
import { AuthService } from '../../../../services/auth.service';
import { transition } from '@angular/animations';


@Component({
  selector: 'app-wallet-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule ,EmptyStateComponent, PageHeaderComponent, PointsDisplayComponent],
  templateUrl: './wallet-dashboard.component.html',
  styleUrl: './wallet-dashboard.component.scss'
})
export class WalletDashboardComponent {

  balance = 0;
  recentTransactions: PointTransaction[] = [];
  totalAdded : number = 0;
  totalSpent = 0;
  contestEntries = 0;

  constructor( private pointsService: PointsService, private authService: AuthService) { }

   ngOnInit(): void {
    this.loadBalance();
    this.loadRecentTransactions();
  }

 private loadBalance(): void {
    this.pointsService.getBalance().subscribe({
      next: (response) => {
        this.balance = response.balance;
      },
      error: (error) => {
        console.error('Failed to load balance:', error);
      }
    });
  }

  private loadRecentTransactions(): void {
    this.pointsService.getTransactions(1, 5).subscribe({
      next: (response) => {
        this.recentTransactions = response.items;
        this.calculateStats(response.items);
      },
      error: (error) => {
        console.error('Failed to load transactions:', error);
      }
    });
  }

  private calculateStats(transactions: PointTransaction[]) {

      this.totalAdded = transactions.filter(t => t.type == 'credit').reduce( (sum , t) => sum + t.points,0);
      this.totalSpent =transactions.filter(t => t.type == 'debit').reduce((sum , t ) => sum + t.points,0);
      this.contestEntries = transactions.filter(t => t.contestId && t.type == 'debit').length;
    }




    
}
