import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  user: any; 

  constructor(private auth: AuthService, private router: Router) {
    this.user = null; 

    
    this.auth.getUserClaims().then((u) => {
      this.user = u;
      console.log(this.user.displayName);
    }).catch(error => {
      console.error("Error fetching user claims:", error);
    });
  }

  logout(): void {
    this.auth.doLogout().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error("Error logging out:", error);
    });
  }
}
