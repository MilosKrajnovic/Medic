import { ArtikalDetailsComponent } from './../artikal-details/artikal-details.component';
import { Component, OnInit, Input} from '@angular/core';
import { DomZdravljaService } from '../dom-zdravlja.service';
import { Artikal } from '../core/artikal';

@Component({
  selector: 'dz-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

korpa:Artikal[];
 total:number;
 showDeletedMessage:boolean;
 orders=[];

  constructor(private dz:DomZdravljaService) {
    this.korpa = this.dz.uzmiPredmete();

  }

  delete(i){
    if(confirm('Da li ste sigurni da zelite da obrisete ovaj proizvod?')){
const index = this.korpa.indexOf(i);
this.korpa.splice(index,1);
this.showDeletedMessage = true;
setTimeout(() => this.showDeletedMessage = false,3000);
this.ukupnaCena();
  }
}

  ngOnInit() {
    this.ukupnaCena()
    this.get();


  }
  ukupnaCena(){
    this.total =0;
    for (let i = 0 ; i < this.korpa.length ; i++) {
      this.total += this.korpa[i].cena* this.korpa[i].kolicina ;
    }
    return this.total
  }
  check(){
      this.orders.push(this.korpa)
      this.dz.saveOrders(this.orders)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

    alert("Uspesno ste porucili");
    this.dz.ocistiKorpu();
  }

  get(){
    this.dz.getOrders()
    .subscribe(
      (response) => {
        this.orders = response;
      },
      (error) => console.log(error)
    )
  }


}
