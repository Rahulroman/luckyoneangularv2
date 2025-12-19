import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';

@Component({
  selector: 'app-add-points',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-points.component.html',
  styleUrl: './add-points.component.scss'
})
export class AddPointsComponent {




}
