import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize} from "rxjs/operators";
import { DomZdravljaService } from '../dom-zdravlja.service';

@Component({
  selector: 'dz-modal-blog',
  templateUrl: './modal-blog.component.html',
  styleUrls: ['./modal-blog.component.css']
})
export class ModalBlogComponent implements OnInit {

  imgSrc : string;
  selectedImage: any = null;
  isSubmited: boolean;

  constructor(private http:HttpClient,
              public activeModal: NgbActiveModal, private storage:AngularFireStorage, private dz:DomZdravljaService) { }

  ucitajSliku(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else{
      this.imgSrc = '../../assets/placeholder.jpg';
      this.selectedImage = null;
    }
  }


closeModal(){
  this.activeModal.close('Modal closed');
}

formTemplate = new FormGroup({
  naslov: new FormControl('',Validators.required),
  slika: new FormControl('',Validators.required),
  tekst: new FormControl('',Validators.required)
})

get formControls(){
  return this.formTemplate['controls'];
}

resetForm(){
  this.formTemplate.reset();
  this.formTemplate.setValue({
    naslov:'',
    slika: '',
    tekst: ''
  });
  this.imgSrc = '../../assets/placeholder.jpg';
  this.selectedImage = null;
  this.isSubmited = false;

}

onSubmit(formValue){
  this.isSubmited = true;
  if(this.formTemplate.valid){
    var filePath = `images/${this.selectedImage.name.split('.')/*.slice(0,-1).join('.')*/}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          formValue['slika']=url;
          this.dz.insertImageDetails(formValue);
          this.resetForm();
        })
      })
    ).subscribe();
  }
}

  ngOnInit() {
this.resetForm();
  }

}
