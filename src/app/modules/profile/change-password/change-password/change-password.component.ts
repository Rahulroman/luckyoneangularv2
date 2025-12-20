import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { UserService } from '../../../../services/user.service';
import { NotificationService } from '../../../../services/notification.service';
import { LoadingService } from '../../../../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule,FormsModule ,PageHeaderComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {


 passwordData = {
    currentPassword: '',
    newPassword: ''
  };
  
  confirmPassword = '';
  isLoading = false;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  hasUppercase(password: string): boolean {
    return /[A-Z]/.test(password);
  }

  hasLowercase(password: string): boolean {
    return /[a-z]/.test(password);
  }

  hasNumber(password: string): boolean {
    return /\d/.test(password);
  }

  canSubmit(): boolean {

    return true;
    // return (
    //   this.passwordData.currentPassword &&
    //   this.passwordData.newPassword &&
    //   this.passwordData.newPassword === this.confirmPassword &&
    //   this.passwordData.newPassword.length >= 6 &&
    //   this.hasUppercase(this.passwordData.newPassword) &&
    //   this.hasLowercase(this.passwordData.newPassword) &&
    //   this.hasNumber(this.passwordData.newPassword)
    // );
  }

  changePassword(): void {
    if (!this.canSubmit()) {
      this.notificationService.showError('Please check password requirements');
      return;
    }

    this.isLoading = true;
    this.loadingService.show();

    // this.userService.changePassword(
    //   this.passwordData.currentPassword,
    //   this.passwordData.newPassword
    // ).subscribe({
    //   next: () => {
    //     this.notificationService.showSuccess('Password changed successfully');
    //     this.router.navigate(['/profile']);
    //   },
    //   error: (error) => {
    //     this.notificationService.showError(error.message || 'Failed to change password');
    //   },
    //   complete: () => {
    //     this.isLoading = false;
    //     this.loadingService.hide();
    //   }
    // });
  }

  cancel(): void {
    this.router.navigate(['/profile']);
  }
}