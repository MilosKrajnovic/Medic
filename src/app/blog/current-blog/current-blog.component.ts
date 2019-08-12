import { Component, OnInit, Input } from '@angular/core';
import { DomZdravljaService } from 'src/app/dom-zdravlja.service';
import { AuthService } from 'src/app/auth.service';
import { Blog } from '../blog.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'dz-current-blog',
  templateUrl: './current-blog.component.html',
  styleUrls: ['./current-blog.component.css']
})
export class CurrentBlogComponent implements OnInit {

  @Input() post: any;


  constructor( authService:AuthService, private dz:DomZdravljaService) { }




  ngOnInit() {
  }


}
