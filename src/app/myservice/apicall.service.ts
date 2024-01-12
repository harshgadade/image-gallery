import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  

  constructor(private http:HttpClient) { }

  getdata(){
    // return this.http.get("http://127.0.0.1:5500/Angular/imagegal/src/app/imagegallery/jsondata/image.json");

    return [
      {
        "img1" : "https://images.pexels.com/photos/68695/aoraki-mount-cook-mountain-new-zealand-68695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Mountain",
        "path" : "../../../assets/mountain 1.jpg"
      },
      // {
      //   "img1" : "../../../assets/mountain2.jpg",
      //   "name": "Mountain",
      //   "path": "../../../assets/mountain2.jpg"
      // },
      {
        "img1" : "https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Mountain",
        "path" : "../../../assets/mountain 3.jpg"
      },
      {
        "img1" : "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Mountain"
      },
      {
        "img1" : "https://images.pexels.com/photos/225203/pexels-photo-225203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Mountain"
      },
      {
        "img1" : "https://images.pexels.com/photos/213825/pexels-photo-213825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Mountain"
      },
      {
        "img1" : "https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Beach"
      },
      {
        "img1" : "https://images.pexels.com/photos/88212/pexels-photo-88212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Beach"
      },
      {
        "img1" : "https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Beach"
      },
      {
        "img1" : "https://images.pexels.com/photos/4651250/pexels-photo-4651250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Car"
      },
      {
        "img1" : "https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Car",
        "path" : "../../../assets/car2.jpg"
      },
      {
        "img1" : "https://images.pexels.com/photos/13980815/pexels-photo-13980815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Car"
      },
      {
        "img1" : "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Car"
      },
      {
        "img1" : "https://images.pexels.com/photos/9334970/pexels-photo-9334970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Car"
      },
      {
        "img1" : "https://images.pexels.com/photos/10394772/pexels-photo-10394772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Car"
      },
      {
        "img1" : "https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Bike"
      },
      {
        "img1" : "https://images.pexels.com/photos/10939825/pexels-photo-10939825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Bike"
      },
      {
        "img1" : "https://images.pexels.com/photos/8194537/pexels-photo-8194537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Bike"
      },
      {
        "img1" : "https://images.pexels.com/photos/8991394/pexels-photo-8991394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Bike"
      },
      {
        "img1" : "https://images.pexels.com/photos/19149970/pexels-photo-19149970/free-photo-of-a-black-bmw-sport-bike-on-an-asphalt-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Bike"
      },
      {
        "img1" : "https://images.pexels.com/photos/11537018/pexels-photo-11537018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name": "Bike"
      }
      
    ]
  }

  
}
