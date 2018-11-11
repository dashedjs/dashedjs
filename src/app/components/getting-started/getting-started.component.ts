import { Component, OnInit } from '@angular/core';
import { ComponentListService } from '../../services/component-list.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
  componentList: string[];
  currentComponent: string;

  constructor(private componentListService: ComponentListService) {}

  ngOnInit() {
    this.componentList = this.componentListService.componentList();
  }
}
