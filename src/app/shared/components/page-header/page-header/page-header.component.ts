import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

@Input () title: string = '';
@Input () subtitle: string = '';
@Input () showBackButton : boolean = false;

}
