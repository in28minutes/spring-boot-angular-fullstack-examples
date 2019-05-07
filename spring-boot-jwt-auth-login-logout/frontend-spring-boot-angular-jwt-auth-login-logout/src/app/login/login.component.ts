import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  loginSuccess = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { 

    }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/courses';
  }

  handleLogin() {
    this.authenticationService.executeJwtAuthenticationService(this.username, this.password).subscribe((res) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.router.navigate([this.returnUrl]);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
    
      
  }

}
