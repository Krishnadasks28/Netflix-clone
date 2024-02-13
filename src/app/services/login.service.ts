import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loggedIn:boolean = false
  login(email:string,password:string){
      this.loggedIn = true
  }

  isLoggedIn():boolean{
    return this.loggedIn
  }
}
