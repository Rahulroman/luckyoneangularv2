import { CommonModule } from '@angular/common';
import { Compiler, Component, inject, NgModule, } from '@angular/core';
import { LoginRequest } from '../../../../core/models/user.model';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../../services/notification.service';
import { LoadingService } from '../../../../services/loading.service';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private notificationService = inject(NotificationService);
  private loadingService = inject(LoadingService);
  private authService = inject(AuthService);
  private route = inject(Router);

  credentials: LoginRequest = {
    username: '',
    password: ''
  }
  isLoading = false;

  onSubmit() {
    this.isLoading = true;

    if (!this.credentials.username || !this.credentials.password) {
      this.notificationService.showError('Please fill in all fields');
      this.isLoading = false;
      return;
    }

    this.loadingService.show();

    this.authService.login(this.credentials).subscribe({
      next : (res) => {
        this.notificationService.showSuccess("Logged in successfully");
          this.route.navigate(['/dashboard']);
         this.isLoading = false;
       this.loadingService.hide();
      },
      error : (error) => {
        this.notificationService.showError("Login failed: " + error.message);
         this.isLoading = false;
       this.loadingService.hide();
      }
    })




  }


}
