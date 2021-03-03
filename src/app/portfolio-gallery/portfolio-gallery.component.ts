import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProjectImagesService } from '../project-images.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss']
})
export class PortfolioGalleryComponent implements OnChanges {
  images?: any[];
  filterBy: string = 'all';
  allImages: any[] = [];

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private imageService: ProjectImagesService) {
    this.allImages = this.imageService.getImages();
   }

  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }

}
