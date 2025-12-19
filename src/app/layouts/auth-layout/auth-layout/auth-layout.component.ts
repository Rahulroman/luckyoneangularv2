import { Component, signal } from '@angular/core';
 import { RouterOutlet, RouterLink } from '@angular/router';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, NgIf, RouterLink],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {



 get isLoginPage(): boolean {
    return window.location.pathname.includes('/login');
  }
  
 get isRegisterPage(): boolean {
    return window.location.pathname.includes('/register');
  }



}
