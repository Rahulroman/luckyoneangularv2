import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CountdownTimerComponent } from '../../../../shared/components/countdown-timer/countdown-timer/countdown-timer.component';
import { Contest, ContestParticipant, CreateContestRequest } from '../../../../core/models/contest.model';
import { JoinContestComponent } from '../../join-contest/join-contest/join-contest.component';
import { User } from '../../../../core/models/user.model';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state/empty-state.component';
import { PointsDisplayComponent } from '../../../../shared/components/points-display/points-display/points-display.component';
import { TimeAgoPipe } from '../../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-contest-detail',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule, FormsModule, RouterLink,
    CountdownTimerComponent,EmptyStateComponent,PointsDisplayComponent
  ,TimeAgoPipe],
  templateUrl: './contest-detail.component.html',
  styleUrl: './contest-detail.component.scss'
})
export class ContestDetailComponent {

    contest: Contest | null = null;
     participants: ContestParticipant[] = [];
  userPoints = 0;
  hasJoined = false;
  isLoading = false;


  

ngOnInit(){
}

copyLink(){}
joinContest(){}





}
