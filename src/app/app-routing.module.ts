import { SingupComponent } from './singup/singup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ApotekaComponent } from './apoteka/apoteka.component';
import { SigninComponent } from './signin/signin.component';
import { ArtikalDetailsComponent } from './artikal-details/artikal-details.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { BlogComponent } from './blog/blog.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { GuardService } from './guard.service';
import { ONamaComponent } from './o-nama/o-nama.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'pocetna', component: HomeComponent },
  { path: 'apoteka',component: ApotekaComponent},
  { path: 'signup',component: SingupComponent},
  { path: 'signin',component: SigninComponent},
  { path: 'artikal',component: ArtikalDetailsComponent},
  { path: 'viewCart',component: ShopCartComponent,canActivate:[GuardService]},
  { path: 'blog',component: BlogComponent},
  { path: 'galerija',component: GalerijaComponent},
  { path: 'oNama',component: ONamaComponent},
  { path: 'blogPost',component: BlogPostComponent, canActivate:[GuardService]},
  { path: '',   redirectTo: 'pocetna', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
