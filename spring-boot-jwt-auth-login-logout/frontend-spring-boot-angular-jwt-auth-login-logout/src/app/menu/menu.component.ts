import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
  }

  handleLogout() {
    this.authenticationService.logout();
  }

}
