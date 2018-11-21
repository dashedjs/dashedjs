import { Component, OnInit } from '@angular/core';
import { ComponentListService } from '../../services/component-list.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  componentList: string[];
  currentComponent: string;

  constructor(private componentListService: ComponentListService) {}

  ngOnInit() {
    this.componentList = this.componentListService.componentList();
  }
}
