import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Artikal } from '../artikal';
import { DomZdravljaService } from 'src/app/dom-zdravlja.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'dz-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public authService:AuthService,
    private router:Router, private dz: DomZdravljaService) {

     }


  ngOnInit() {
  }

  signout(){
    this.authService.signout();
    this.router.navigate(['/signin']);
  }

}
