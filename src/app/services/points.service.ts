import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../core/models/api-response.model';
import { PointsTransaction } from '../core/models/points.model';

@Injectable({
  providedIn: 'root',
})
export class PointsService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  getBalance(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/points/balance');
  }

  getTransactions(
    page: number = 1,
    limit: number = 10
  ): Observable<PaginatedResponse<PointsTransaction>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<PaginatedResponse<PointsTransaction>>(
      this.apiUrl + '/points/transactions',
      { params }
    );
  }
}
