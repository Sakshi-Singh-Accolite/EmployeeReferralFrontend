import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent{
  
  constructor(private router: Router, private service: AuthService, private _ngZone: NgZone){}
  
  
  public logout(){
    this.service.signOutExternal();
    this._ngZone.run(()=>{
    this.router.navigate(['/']).then(()=>window.location.reload())
  })
  }

}
