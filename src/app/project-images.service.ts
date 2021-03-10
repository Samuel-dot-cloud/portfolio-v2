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

  getImage(id: string) {
    return Imagesdetails.slice(0).find(Images => Images.id == id)
  }
}
const Imagesdetails = [
  {
    "id": "1",
    "name": "MyEdu",
    "description": "An MCQ Android application.",
    "category": "upcoming",
    "url": "assets/img/portfolio/myedu.jpg",
    "github": "https://github.com/Samuel-dot-cloud/MyEdu",
    "live": ""
  },
  {
    "id": "2",
    "name": "Wallpaper App",
    "description": "An application that makes use of Unsplash's API to provide you with a catalog of photos, for use in theming your mobile phone.",
    "category": "latest",
    "url": "assets/img/portfolio/wallpaper-app.jpg",
    "github": "https://github.com/Samuel-dot-cloud/WallpaperApp",
    "live": "https://appetize.io/app/kjgf04wqzeda66zvzxe5hjn9fr?device=nexus5&scale=75&orientation=portrait&osVersion=8.1"
  },
  {
    "id": "3",
    "name": "Kanban",
    "description": "A project that makes use of kanban methodology to keep track of tasks.",
    "category": "latest",
    "url": "assets/img/portfolio/kanban.png",
    "github": "https://github.com/Samuel-dot-cloud/Kanban-Board",
    "live": ""
  },
  {
    "id":"4",
    "name": "Web-Speech-Analyzer",
    "description": "A website that makes use of various web APIs' to convert speech into text.",
    "category": "following",
    "url": "assets/img/portfolio/speech-to-text.jpg",
    "github": "https://github.com/Samuel-dot-cloud/Speech-To-Text-Analyzer",
    "live": ""
  },
  {
    "id": "5",
    "name": "WhatsApp2",
    "description": "A clone of the popular WhatsApp application. The application maintains the base minimum functionalities of WhatsApp such as a group chat, an individual chat section,and the ability to send, receive and delete messages and documents such as PDF, image and MS word files.",
    "category": "popular",
    "url": "assets/img/portfolio/whatsapp-2.jpg",
    "github": "https://github.com/Samuel-dot-cloud/WhatsApp2",
    "live": "https://appetize.io/app/uv9p412bztdu631cmwzx6fkzqg?device=nexus5&scale=75&orientation=portrait&osVersion=8.1"
  },
  {
    "id": "6",
    "name": "RecipeApp",
    "description": "An Android recipe search application.",
    "category": "popular",
    "url": "assets/img/portfolio/recipe-app.jpg",
    "github":"https://github.com/Samuel-dot-cloud/RecipeApp",
    "live": ""
  }
]

