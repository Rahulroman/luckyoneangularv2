import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from "@angular/router";
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  constructor(private authService: AuthService) {
      this.authService.currentUser$.subscribe(user => {
        this.currentUser = user;
      });
  }

  currentUser: User | null = null;
  currentYear = new Date().getFullYear();

supportEmail : string = "support@luckyone.com";


 logout() {
    this.authService.logout();
  }



}
