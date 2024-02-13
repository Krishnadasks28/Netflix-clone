import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email:string,password:string){
      localStorage.setItem("token",email)
  }

  isLoggedIn():boolean{
    if(localStorage.getItem("token")){
      return true
    }
    return false
  }
}
