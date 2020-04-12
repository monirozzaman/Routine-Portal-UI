import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";


@Injectable()
export class AuthService {

  baseUrl: string = environment.itvillage.baseApiEndPoint;

  constructor(private http: HttpClient) {
  }


  public login(employeeId: string, password: string): Observable<any> {

    const loginUrl: string = this.baseUrl + 'login';

    const body = {
      "employeeId": employeeId,
      "password": password
    }

    return this.http.post(loginUrl, body);

  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getAccessToken() {
    return localStorage.getItem('token');
  }

  public getAuthTokenScopes(): string[] {

    let jwtData = this.getAccessToken().split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    let roles = decodedJwtData.scopes
    return roles;
  }
}
