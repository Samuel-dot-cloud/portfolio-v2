import { Component, OnInit, AfterViewInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit {

  @Input()
  @HostBinding('class.drawer-open')
  isDrawerOpen?: boolean;

  @Output()
  drawerTogglerEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  onNavLinkClicked($event: MouseEvent) {
    this.isDrawerOpen = false;
    this.drawerTogglerEmitter.emit(this.isDrawerOpen);
  }

}
