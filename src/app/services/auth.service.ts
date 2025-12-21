import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse, RegisterRequest, User } from '../core/models/user.model';
import { environment } from '../../environments/environment.development';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, toastr: ToastrService) { }

appUrl = environment.apiUrl;

  currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();


  login(credentials: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(  this.appUrl +'/auth/login', credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.currentUserSubject.next(response.user);
      })
    );
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    
    return this.http.post<AuthResponse>(  this.appUrl +'/Auth/register' , userData).pipe(
      tap( response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
         this.currentUserSubject.next(response.user);
      })
    )
  };

forgotPassword(email : string) : Observable<any>{
  return this.http.post<any>(this.appUrl + '/auth/forgot-password', email).pipe(
    tap ( response => { 

     })
  )
}

  getCurrentUser() : User | null{
       const userStr = localStorage.getItem('USER');
        return userStr ? JSON.parse(userStr) : null;
  }

getToken() {
  const token = localStorage.getItem('token');
  return token;
}


   logout() {
      localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
   }

updateUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }


}
