import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private path = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {}
 
  public signOutExternal = () => {
    this.cookieService.delete('authCookie');
    console.log('Token cookie deleted');
  };

  LoginWithGoogle(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json;charset=UTF-8');
    
    return this.httpClient.post(
      this.path + 'LoginWithGoogle',
      JSON.stringify(credentials),
      { headers: header }
    );
  }

  getToken(): string | null {
    return this.cookieService.get('authCookie');
  }

  setToken(tokenPayload:string): void {
    this.cookieService.set('authCookie', tokenPayload, { expires: 1 });
  }

  isTokenPresent(): boolean {
    return this.cookieService.check('authCookie');
  }
}