import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private LoadingSubject = new BehaviorSubject<boolean>(false); 

  public Loading$ = this.LoadingSubject.asObservable();

  show() : void {
    this.LoadingSubject.next(true);
  }

  hide() : void {
    this.LoadingSubject.next(false);
  }


}
