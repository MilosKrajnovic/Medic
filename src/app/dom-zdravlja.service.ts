import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, Subject} from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DomZdravljaService {

  private subject = new Subject<any>();
  imageDetailList: AngularFireList<any>;
  korpa = [];

  constructor(private httpClient: HttpClient,
    private authService:AuthService, private firebase:AngularFireDatabase) { }

    getImageDetailList(){
      this.imageDetailList = this.firebase.list('imageDetails');
    }

    insertImageDetails(imageDetails){
      this.imageDetailList.push(imageDetails);
    }

    getArtikal() {
      return this.httpClient.get<any[]>('https://domzdravlja-1c736.firebaseio.com/Artikal.json');
    }

    sendMessage(message: any) {
      this.subject.next(message);
    }

    getMessage(): Observable<any> {
      return this.subject.asObservable();
    }

    clearMessage() {
      this.subject.next();
    }

    dodajUKorpu(proizvod){
      this.korpa.push(proizvod);
    }

    uzmiPredmete(){
      return this.korpa;
    }

    ocistiKorpu(){
      this.korpa = [];
      return this.korpa;
    }

    getPosts(){
      return this.httpClient.get<any[]>('https://domzdravlja-1c736.firebaseio.com/Blog.json');
    }

    savePosts(posts){
      const token = this.authService.vratiToken();
      return this.httpClient.put('https://domzdravlja-1c736.firebaseio.com/Blog.json?auth=' + token,posts)
    }

    saveOrders(order){
      const token = this.authService.vratiToken();
      return this.httpClient.put('https://domzdravlja-1c736.firebaseio.com/porudzbine.json?auth=' + token,order)
    }

    getOrders(){
      return this.httpClient.get<any[]>('https://domzdravlja-1c736.firebaseio.com/porudzbine.json');
    }

  }
