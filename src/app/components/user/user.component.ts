import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/interfaces/iuser';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { AutenticationService } from 'src/app/services/autentication-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent  {
  hide = true;
  username:string = "";
  password:string = "";
  loading:boolean =false;
  user!:Iuser;

  form:FormGroup;


 
  constructor(private router: Router,private loginService: LoginServiceService,private formBuilder: FormBuilder,private autentificacionServ:AutenticationService,private userService:UserServiceService) { 
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')]],
        password: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')]],
      } 
    )
  } 

  get Username(){
    return this.form.get("username"); 
  }
      
  get Password(){
    return this.form.get("password");
  }

  iniciarSesion() {
    
    console.log(this.form.value);
    this.autentificacionServ.iniciarSesion(this.form.value.username, this.form.value.password).subscribe( data => {
      
      this.volverHome();
      /*
      this.loginService.setToken(data.token);
      if(data.token !== null){
        this.logIn();
      }
      */
     this.loading= false; 
     
    });
    
    
  }
  volverHome(){
    this.router.navigate([''])
  }
  login() {
    this.userService.login( this.form.value.usuario, this.form.value.password).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
        localStorage.setItem("persona", JSON.stringify(this.user));
        this.volverHome();
      }
    );
  }
  


}
