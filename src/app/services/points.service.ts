import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(private http : HttpClient) { }

  private apiUrl = environment.apiUrl;
 

  getBalance() : Observable<any>{
  return this.http.get<any>( this.apiUrl + '/points/balance' );
}


}
