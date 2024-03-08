import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private AUTH:AuthService,private router:Router){}
  SIGNIN(): void {
    
  }
  signin():void{
    //connecter sur fire base 
    this.AUTH.doGoogleLogin().then(()=>{
      this.router.navigate(['/member']);
    })
    //if autentifié redirection vers /members
  }
}
