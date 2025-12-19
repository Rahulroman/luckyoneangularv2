import { Component } from '@angular/core';
import { User } from '../../../../core/models/user.model';
import { AuthService } from '../../../../services/auth.service';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [CommonModule,FormsModule, PageHeaderComponent],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.scss'
})
export class ProfileViewComponent {

    user: User | null = null;
  contestWins = 0;
  contestEntries = 0;

 constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}


  ngOnInit(): void {
    this.loadUserProfile();
  }

private loadUserProfile(): void {
    this.user = this.authService.getCurrentUser();
    
    if (this.user) {
      this.userService.getProfile().subscribe({
        next: (user) => {
          this.user = user;
          this.authService.updateUser(user);
        },
        error: (error) => {
          console.error('Failed to load user profile:', error);
        }
      });
    }
  }


}
