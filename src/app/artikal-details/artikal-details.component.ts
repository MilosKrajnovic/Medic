import { Artikal } from './../core/artikal';
import { DomZdravljaService } from './../dom-zdravlja.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'dz-artikal-details',
  templateUrl: './artikal-details.component.html',
  styleUrls: ['./artikal-details.component.css']
})
export class ArtikalDetailsComponent implements OnInit {

  ovajArtikal: Artikal;
  subject = new Subject<any>();
  subscription = this.subject.asObservable();
  broj: number = 1;
  korpa=[];


  constructor(private dz:DomZdravljaService , private router:Router,public authService:AuthService) {
    this.subscription= this.dz.getMessage();

    this.subscription.subscribe(message =>{
      console.log('poruka unutar detailsa componente', message);
      this.ovajArtikal = message;
    }) ;
  //  console.log('subscription',this.subscription);
  //  console.log('ovaj artikal', this.ovajArtikal);
  }



  ngOnInit() {
  }
  staviUKorpu(proizvod){
    this.ovajArtikal.kolicina= this.broj
    this.dz.dodajUKorpu(proizvod);
  }


}
