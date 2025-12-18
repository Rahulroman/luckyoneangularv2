import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {

  @Input() title: string = 'No data found';
  @Input() description: string = 'There is no data to display at the moment.';


}
