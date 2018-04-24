import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UploadService } from './upload.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('i') up:ElementRef;
  title = 'app';
  form: FormGroup

  constructor(private fb: FormBuilder,
              private uploadService: UploadService
  ){
    this.form = this.fb.group({
          xxx: ''
        });
      
  }

  ngOnInit(){}

  upload(){
    //console.log(this.up.nativeElement.files[0]);
    let fd = new FormData();
    fd.append('xxx', this.up.nativeElement.files[0], this.up.nativeElement.files[0].name);
    let url = 'upload';

    
    // send request using AJAX
    //this.uploadService.postFormAjax(url, fd);

    this.uploadService.postForm(url, fd).subscribe( 
      data => {
        console.log('ok   ' + data);
      },
      err => console.log({
        error: err
      }))
    
  }
    
  
    
}
