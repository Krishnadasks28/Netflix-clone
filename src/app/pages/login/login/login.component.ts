import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router,private toaster:ToastrService){}
  email!:string;
  password!:string;
  
  ngOnInit(){
    if(this.loginService.isLoggedIn()){
      this.router.navigateByUrl('/browse')
    }
  }
  onSubmit(){
    if(!this.email || !this.password){
      this.toaster.error("Enter your login details.")
      return
    }

    this.loginService.login(this.email,this.password)
    this.toaster.success(`Logged In as ${this.email.split('@')[0]}`)
    this.router.navigateByUrl('/browse')
  }
}
