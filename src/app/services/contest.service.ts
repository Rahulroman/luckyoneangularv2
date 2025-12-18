import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contest } from '../core/models/contest.model';
import { PaginatedResponse } from '../core/models/api-response.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  getContests(page: number = 1, limit: number = 10, status?: string): Observable<PaginatedResponse<Contest>> {

    let params = new HttpParams().set('page', page.toString()).set('limit', limit.toString());

    if (status) {
      params = params.set('status', status);
    }
    return this.http.get<PaginatedResponse<Contest>>(
      this.apiUrl + '/contests',
      { params }
    );
  }

  getMyContests() : Observable<Contest[]>{
    return this.http.get<Contest[]>( this.apiUrl + '/contests/my-contests',);
  }

}
