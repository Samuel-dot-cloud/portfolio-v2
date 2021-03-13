import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-main-portfolio',
  templateUrl: './main-portfolio.component.html',
  styleUrls: ['./main-portfolio.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class MainPortfolioComponent implements OnInit {

  myFileName = 'Resume.pdf';
  fileUrl = 'assets/files/resume.pdf';

  faPhone = faPhone;

  email?: string;
  collapsed = true;
  isSticky: boolean = false;

  constructor(public dialog: MatDialog) { }

  isAnimated?: boolean;

  // Drawer logic
  @HostBinding("class.drawer-open")
  isDrawerOpen: boolean = false;

  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }

  // Modal form logic
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  //Hide the collapse menu after click
  onClick() {
    this.collapsed = true;
  }




  ngOnInit(): void {
  }

}
