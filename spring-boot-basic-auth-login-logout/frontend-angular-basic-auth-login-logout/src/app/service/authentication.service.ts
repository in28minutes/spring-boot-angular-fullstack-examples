import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: String;
  public password: String;

  constructor(private http: HttpClient) {

  }

  executeBasicAuthenticationService(username: String, password: String) {
    return this.http.get(`http://localhost:8080/basicauth`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null; 
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }

}
