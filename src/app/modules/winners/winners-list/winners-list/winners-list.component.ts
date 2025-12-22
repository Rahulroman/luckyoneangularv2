import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state/empty-state.component';

@Component({
  selector: 'app-winners-list',
  standalone: true,
  imports: [CommonModule,FormsModule,PageHeaderComponent,RouterLink,EmptyStateComponent],
  templateUrl: './winners-list.component.html',
  styleUrl: './winners-list.component.scss'
})
export class WinnersListComponent {

selectedFilter =0;
isAdmin = true;
totalPages=0;currentPage =0;
nextPage(){}
prevPage(){}

sortBy=0;
loadWinners(){}
winners =[ {
  endDate :'',
  title : '',
  winnerUsername :'',
  entryPoints :0,
  currentParticipants : 0,
  winnerId : '',
  id : ''
}];

}
