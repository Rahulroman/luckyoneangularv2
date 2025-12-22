import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../../services/notification.service';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-settings-main',
  standalone: true,
  imports: [CommonModule,PageHeaderComponent,RouterLink,FormsModule,ConfirmDialogComponent],
  templateUrl: './settings-main.component.html',
  styleUrl: './settings-main.component.scss'
})
export class SettingsMainComponent {

  private notificationService = inject(NotificationService);

   activeSection = 'account';
  isLoading = false;
  sections = [
    { id: 'account', name: 'Account', icon: '👤' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'display', name: 'Display', icon: '🎨' },
    { id: 'privacy', name: 'Privacy', icon: '🔒' }
  ];

   settings = {
    privacy: {
      publicProfile: true,
      dataSharing: false,
      activityVisibility: 'public'
    },
    notifications: {
      email: true,
      contestStart: true,
      contestEnd: true,
      winnerAnnouncement: true,
      pointsUpdate: true,
      transaction: true,
      promotional: false
    },
    security: {
      twoFactor: false
    },
    display: {
      theme: 'light',
      language: 'en'
    }
  };

  ngOnInit(): void {
    this.loadSettings();
  }

private loadSettings(): void {
    const savedSettings = localStorage.getItem('luckyone_settings');
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
    }
  }

selectSection(sectionId: string): void {
    this.activeSection = sectionId;
  }

   setTheme(theme: string): void {
    this.settings.display.theme = theme;
    
    // Apply theme to document
    document.body.classList.remove('dark-theme', 'light-theme');
    if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }

   saveSettings(): void {
    this.isLoading = true;
    ///this.loadingService.show();

    // Save to localStorage
    localStorage.setItem('luckyone_settings', JSON.stringify(this.settings));
    
    // Apply theme
    this.setTheme(this.settings.display.theme);

    // Simulate API call
    setTimeout(() => {
      ///this.notificationService.showSuccess('Settings saved successfully');
      this.isLoading = false;
     // this.loadingService.hide();
    }, 500);
  }


 resetSettings(): void {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      this.settings = {
        privacy: {
          publicProfile: true,
          dataSharing: false,
          activityVisibility: 'public'
        },
        notifications: {
          email: true,
          contestStart: true,
          contestEnd: true,
          winnerAnnouncement: true,
          pointsUpdate: true,
          transaction: true,
          promotional: false
        },
        security: {
          twoFactor: false
        },
        display: {
          theme: 'light',
          language: 'en'
        }
      };
      
      this.saveSettings();
    }
  }

  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      this.notificationService.showWarning('Account deletion feature is not implemented yet');
    }
  }




}
