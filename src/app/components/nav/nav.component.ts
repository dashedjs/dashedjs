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
      href: '#',
      onclick: function() {
        console.log('hello Getting started');
      }
    },
    {
      text: 'Components',
      // href: '#',
      onclick: function() {
        console.log('hello Components');
      }
    },
    {
      text: 'Playground',
      href: '#',
      onclick: function() {
        console.log('hello Playground');
      }
    }
  ];

  @Output() selectedItem = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onItemClick(navItem) {
    console.log(navItem);
  }
}
