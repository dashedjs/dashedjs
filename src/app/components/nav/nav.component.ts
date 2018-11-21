import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from 'src/app/models/nav-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input()
  navItems: NavItem[] = [
    {
      text: 'Getting started',
      href: '#'
    },
    {
      text: 'Components',
      href: '#'
    },
    {
      text: 'Playground',
      href: '#'
    }
  ];

  @Output() selectedItem = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onItemClick(navItem) {
    console.log(navItem);
  }
}
