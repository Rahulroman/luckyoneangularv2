import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterRequest, User } from '../../../../core/models/user.model';
import { NotificationService } from '../../../../services/notification.service';
import { LoadingService } from '../../../../services/loading.service';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private notificationService = inject(NotificationService);
  private loadingService = inject(LoadingService);
  private authService = inject(AuthService);
  private router = inject(Router);

  userData: RegisterRequest = {
    username: '',
    email: '',
    password: '',
    fullName: '',
    phoneNumber: ''
  };

  confirmPassword = '';
  acceptedTerms = false;
  isLoading = false;

  onSubmit() {

    if (!this.userData.username || !this.userData.email || !this.userData.password) {
      this.notificationService.showError('Please fill in all required fields');
      return;
    }

    if (this.userData.password !== this.confirmPassword) {
      this.notificationService.showError('Passwords do not match');
      return;
    }

    if (!this.acceptedTerms) {
      this.notificationService.showError('You must accept the terms and conditions');
      return;
    }

    this.userData.phoneNumber = this.userData.phoneNumber.toString();

    this.isLoading = true;
    this.loadingService.show();

    this.authService.register(this.userData).subscribe({
      next: (response) => {

        console.log(response);


        this.notificationService.showSuccess('Account created successfully');
        this.router.navigate(['/dashboard']);
        this.isLoading = false;
        this.loadingService.hide();

      },
      error: (response) => {
           this.notificationService.showError(response.message || 'Registration failed');
           this.isLoading = false;
        this.loadingService.hide();
      },
      // no need
      complete : () => {}
    })



  }


}
