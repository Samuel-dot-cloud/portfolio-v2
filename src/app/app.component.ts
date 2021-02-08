import { Component, HostBinding } from '@angular/core';
import { faQuora, faMedium, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  faQuora = faQuora;
  faMedium = faMedium;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  isAnimated?: boolean;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }

  @HostBinding("class.drawer-open")
  isDrawerOpen: boolean = false;

  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }

  

  ngOnInit() { }
}
