import { Component, OnInit } from '@angular/core';
import { faQuora, faMedium, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faQuora = faQuora;
  faMedium = faMedium;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
