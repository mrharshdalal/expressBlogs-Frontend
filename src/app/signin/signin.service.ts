import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private baseUrl = 'http://localhost:8080/api/user'

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}/getAllUsers`);
  }

  public getUserByEmail(email: string): Observable<any[]>{
    const url = `${this.baseUrl}/getUserByEmail/${email}`;
    // console.log("i am here", url);
    return this.http.get<any>(url);
  }
}
