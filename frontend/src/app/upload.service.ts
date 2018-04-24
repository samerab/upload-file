import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable()
export class UploadService {

  constructor(private http: HttpClient) { }

  postTest(url) {
    
    return this.http.get(url);
  }

  postForm(url, body) {
    // var headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/form-data');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data'
      })
    };

    return this.http.post(url, body)
  }

  postFormAjax(url, body){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
      }
    }  
    xhr.send(body);
  }

}
