import { Component, Injectable, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Directive,HostListener,ElementRef} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() sidenav: MatDrawer;
  constructor() { }

  onOpenedChange(){
    this.sidenav.toggle();
  }
}