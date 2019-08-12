import { DomZdravljaService } from './dom-zdravlja.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome'
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ApotekaComponent } from './apoteka/apoteka.component';
import { SingupComponent } from './singup/singup.component';
import { SigninComponent } from './signin/signin.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ArtikalDetailsComponent } from './artikal-details/artikal-details.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { CurrentBlogComponent } from './blog/current-blog/current-blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { environment } from 'src/environments/environment';
import { ModalBlogComponent } from './modal-blog/modal-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ApotekaComponent,
    SingupComponent,
    SigninComponent,
    ShopCartComponent,
    ArtikalDetailsComponent,
    BlogComponent,
    BlogPostComponent,
    GalerijaComponent,
    ONamaComponent,
    CurrentBlogComponent,
    PageNotFoundComponent,
    ModalBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1kkUtBsge1k6hPsdwTtM2xlF1zousILo'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AuthService, DomZdravljaService],
  bootstrap: [AppComponent],
  entryComponents: [ModalBlogComponent]
})
export class AppModule { }

