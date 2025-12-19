import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { NotificationService } from '../../../../services/notification.service';
import { LoadingService } from '../../../../services/loading.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  constructor(private authService: AuthService,
    private notificationService: NotificationService,
    private loadingService: LoadingService) { }

  email = '';
  isLoading = false;
  emailSent = false;

  onSubmit() {
    if (!this.email) {
      this.notificationService.showError('Please enter your email');
      return;
    }


    this.isLoading = true;
    this.loadingService.show();

    this.authService.forgotPassword(this.email).subscribe({
      next: (response) => {
        this.emailSent = true;
        this.notificationService.showSuccess('Password reset link sent successfully');
        this.isLoading = false;
        this.loadingService.hide();
      },
      error: (error) => {
        this.notificationService.showError(error.message || 'Failed to send reset link');
        this.isLoading = false;
        this.loadingService.hide();
      },

    })

  }
}
