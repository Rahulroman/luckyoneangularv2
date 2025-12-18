import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingService } from '../../../../services/loading.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  loading$ = this.loadingService.Loading$;

  constructor(private loadingService: LoadingService) {}


}
