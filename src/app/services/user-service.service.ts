import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url2: string = "http://localhost:8080/api/login";

  user: Iuser = { username: "", password: "", token: "" };

  constructor(private api: HttpClient) {}
  login(username: string, password: string): Observable<any> {  
    this.user.username = username;
    this.user.password = password;
    return this.api.post(`http://localhost:8080/api/login`, this.user);
    
	}
}
