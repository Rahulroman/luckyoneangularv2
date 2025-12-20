import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state/empty-state.component';
import { User } from '../../../../core/models/user.model';
import { UserService } from '../../../../services/user.service';
import { AuthService } from '../../../../services/auth.service';
import { NotificationService } from '../../../../services/notification.service';
import { LoadingService } from '../../../../services/loading.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderComponent,
    EmptyStateComponent,RouterLink
  ],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
})
export class ProfileEditComponent {
  user: User | null = null;

  userData: any = {
    FullName: '',
    username: '',
    email: '',
    bio: '',
    phone: '',
    location: '',
  };

  avatarPreview: string | null = null;
  selectedAvatar: File | null = null;
  isLoading = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this.user = this.authService.getCurrentUser();

    if (this.user) {
      this.userData = {
        FullName: this.user.fullName || '',
        username: this.user.username || '',
        email: this.user.email || '',
        bio: this.user.username || '',
        phone: this.user.phoneNumber || '',
        location: this.user.username || '',
      };
    }
  }

  onAvatarSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        this.notificationService.showError('File size exceeds 2MB limit.');
        return;
      }

      this.selectedAvatar = file;

      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.avatarPreview = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }




  updateProfile (){

  }

}
