import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [PageHeaderComponent,CommonModule,FormsModule , RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

totalContests = 0;
activeUsers =0;
totalRevenue=0;
completionRate=0;

recentActivities =[
{
  icon : '',
  message : '',
  time : '',
}
];


pendingContests =[{ 
  title : '',
  description : '',
  endDate :'',
  currentParticipants :'',
maxParticipants :'',
id : ''
}]


}
