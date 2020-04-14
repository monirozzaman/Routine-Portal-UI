import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.itvillage.baseApiEndPoint;

  constructor(private http: HttpClient) {
  }

  getUserDetails(): Observable<any> {
    const requestedApi = this.baseUrl + 'my/details';
    console.log(this.http.get(requestedApi));
    return this.http.get(requestedApi);
  }

  getUserDetailsList(): Observable<any> {
    const requestedApi = this.baseUrl + 'admin/faculties-list';
    console.log(this.http.get(requestedApi));
    return this.http.get(requestedApi);
  }
}
