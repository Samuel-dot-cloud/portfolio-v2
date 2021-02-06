import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectImagesService {

  constructor() { }

  allImages: any;

  getImages() {
    return this.allImages = Imagesdetails.slice(0);
  }

  getImage(id: number){
    return Imagesdetails.slice(0).find(Images => Images.id == id)
  }
}
  const Imagesdetails = [
    {"id" : 1, "category": "upcoming", "url": "assets/img/portfolio/p1.jpg"},
    {"id" : 2, "category": "latest", "url": "assets/img/portfolio/p2.jpg"},
    {"id" : 3, "category": "latest", "url": "assets/img/portfolio/p3.jpg"},
    {"id" : 4, "category": "following", "url": "assets/img/portfolio/p4.jpg"},
    {"id" : 5, "category": "popular", "url": "assets/img/portfolio/p5.jpg"}
  ]

