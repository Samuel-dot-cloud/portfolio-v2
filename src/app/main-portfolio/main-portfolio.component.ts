import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-main-portfolio',
  templateUrl: './main-portfolio.component.html',
  styleUrls: ['./main-portfolio.component.scss']
})
export class MainPortfolioComponent implements OnInit {

  myFileName = 'Resume.pdf';
  fileUrl = 'assets/files/resume.pdf';

  faPhone = faPhone;

  email?: string;
  collapsed = true;

  navFixed: boolean = false;
  navElement?: HTMLElement;

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
      width: '270px',
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
