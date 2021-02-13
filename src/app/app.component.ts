import { Component, HostBinding } from '@angular/core';
import { faQuora, faMedium, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

  @HostBinding("class.drawer-open")
  isDrawerOpen: boolean = false;

  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }

  

  ngOnInit() { }
}
