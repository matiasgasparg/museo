import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loggedo$ = new BehaviorSubject<boolean>(false);
  loading:boolean ;
  

  constructor(private http: HttpClient) {
    this.loading = false;        
   }

  LogIn(){
    this.loggedo$.next(true);
  }
  
  LogOut(){
    this.loggedo$.next(false);
  }
  
  LogState() {
    return this.loggedo$.asObservable();
  }
  mantenerseLogueado(){
    if(sessionStorage.getItem('currentUser')){
      this.LogIn();
    }
  }

}