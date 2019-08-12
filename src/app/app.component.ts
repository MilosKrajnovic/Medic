import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DomZdravlja';

constructor(private authService: AuthService, private router:Router){}
ngOnInit(){
/*firebase.initializeApp({
  apiKey:"AIzaSyBT_4_8r9oSSXzZpuTjvM0HxR9p6Sbolnc",
  authDomain:"domzdravlja-1c736.firebaseapp.com"
});*/
}
signOut(){
  this.authService.signout();
  this.router.navigate(['/signin']);
}
}
