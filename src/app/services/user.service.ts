import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../core/models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  private apiUrl = environment.apiUrl;


   getProfile(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/profile`);
  }


}
