import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state/empty-state.component';
import { RouterLink } from "@angular/router";
import { PointsTransaction } from '../../../../core/models/points.model';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeaderComponent, EmptyStateComponent, RouterLink],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {

nextPage(){}
selectedType='';
selectedMonth='';
selectedYear='';
totalItems =0;
totalCredits=0;
totalDebits=0;
currentPage=0;
totalPages=0;
prevPage(){};


transactions : PointsTransaction[] = [];

loadTransactions(){};

}
