import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

@Input () title: string = '';
@Input () subtitle: string = '';
@Input () showBackButton : boolean = false;

}
