import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }

  login(username:string, password:string) {
    return this.httpClient.post<{access_token:  string}>
    ('http://127.0.0.1:8000/api/login_check', {username, password}).pipe(tap(res => {
      console.log("sahbi",res);
      let tok:any = res;
      console.log('tok',tok['token']);
    localStorage.setItem('access_token', tok['token']);
}))
}
}
