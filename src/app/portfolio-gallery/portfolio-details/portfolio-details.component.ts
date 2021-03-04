import { Component, ElementRef, OnInit } from '@angular/core';
import { ProjectImagesService } from '../../project-images.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  image: any;

  constructor(private imageService: ProjectImagesService, private route: ActivatedRoute, private el: ElementRef) { }



  ngOnInit() {
    this.image = this.imageService.getImage(this.route.snapshot.params['id']);

    // we added this so that when the backdrop is clicked the modal is closed.
    this.el.nativeElement.addEventListener('click', ()=> {
      this.close()
  })
  }

  close() {
    this.el.nativeElement.classList.remove('sshow')
    this.el.nativeElement.classList.add('hhidden')
  }

}
