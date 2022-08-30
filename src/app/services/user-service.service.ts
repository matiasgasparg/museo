import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url2: string = "localhost:8080/api/login";

  user: Iuser = { usuario: "", password: "", token: "" };

  constructor(private api: HttpClient) {}
  login(usuario: string, password: string): Observable<any> {  
    this.user.usuario = usuario;
    this.user.password = password;
    return this.api.post(`localhost:8080/login`, this.user);
    
	}
}
