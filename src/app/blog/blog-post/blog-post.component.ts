import { Blog } from './../blog.model';
import { Component, OnInit } from '@angular/core';
import { DomZdravljaService } from 'src/app/dom-zdravlja.service';
import { AuthService } from 'src/app/auth.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalBlogComponent} from '../../modal-blog/modal-blog.component';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'dz-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {


  postoviNiz: any[];
  currentPost: any;

  constructor(private dz: DomZdravljaService, authService:AuthService, private modalService : NgbModal, private storage:AngularFireStorage) { }




get(){
 /* this.dz.getPosts()
  .subscribe(
    (response) => {
      this.postoviNiz = response;
    },
    (error) => console.log(error)
  )*/
  this.dz.getImageDetailList();
  this.dz.imageDetailList.snapshotChanges().subscribe(
    list => {
    this.postoviNiz=  list.map(item => {return item.payload.val();})
    }
  )
}

edit(post:any){
  this.currentPost = post;
}

openModal(){
  const modalRef = this.modalService.open(ModalBlogComponent);
  modalRef.result.then((result) =>{
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}

ngOnInit() {
   this.get();
}
}

