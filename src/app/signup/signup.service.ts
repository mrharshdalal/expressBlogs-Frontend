import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}

  public addNewUser(user: User): Observable<User>{
    console.log("hey its me", user);
    const url = `${this.baseUrl}/addNewUser`;
    return this.http.post<any>(url, user);
  } 
}
