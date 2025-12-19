import { Component, Input } from '@angular/core';
import { Contest } from '../../../../core/models/contest.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contest-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contest-card.component.html',
  styleUrl: './contest-card.component.scss'
})
export class ContestCardComponent {

  @Input () contest! : Contest;

}
