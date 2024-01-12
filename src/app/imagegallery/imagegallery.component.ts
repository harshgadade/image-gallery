import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../myservice/apicall.service';

@Component({
  selector: 'app-imagegallery',
  templateUrl: './imagegallery.component.html',
  styleUrl: './imagegallery.component.css'
})
export class ImagegalleryComponent implements OnInit{

  constructor(private api:ApicallService) {}

  searchText:any = "";

  imggal:any

  ngOnInit(): void {
    this.imggal = this.api.getdata().subscribe(
      (data:any)=>{
          // console.log(data);
          this.imggal = data;
    });
    console.log(this.imggal)
  }


  
}
