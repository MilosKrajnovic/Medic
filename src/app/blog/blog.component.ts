import { Component, OnInit } from '@angular/core';
import { DomZdravljaService } from '../dom-zdravlja.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'dz-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  postoviNiz:any [];//
  constructor(private dz: DomZdravljaService, private router:Router, private authService: AuthService) { }


dodajBlog(){
  this.router.navigate(['/blogPost'])
}

/*get(){
  this.dz.getPosts()
  .subscribe(
    (response) => {
      this.postoviNiz = response;
    },
    (error) => console.log(error)
  )
}*/


ngOnInit() { // this.get();
  this.dz.getImageDetailList();
  this.dz.imageDetailList.snapshotChanges().subscribe(
    list => {
    this.postoviNiz=  list.map(item => {return item.payload.val();})
    }
  )
}

}
