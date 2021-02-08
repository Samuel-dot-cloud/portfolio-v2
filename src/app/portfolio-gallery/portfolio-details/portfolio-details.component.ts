import { Component, OnInit } from '@angular/core';
import { ProjectImagesService} from '../../project-images.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
image: any;

  constructor(private imageService: ProjectImagesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getImage(this.route.snapshot.params['id'])
  }

}
