import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get("http://127.0.0.1:5500/Angular/imagegal/src/app/imagegallery/jsondata/image.json");
  }
}
