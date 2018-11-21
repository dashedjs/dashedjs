import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  constructor() {}

  componentList(): string[] {
    return [
      'Button',
      'Card',
      'Checkbox',
      'Fab',
      'Header',
      'Icon',
      'Icons',
      'Input',
      'Link',
      'Notification',
      'Radio',
      'Select',
      'Slider',
      'Styles',
      'Tag',
      'Toggle',
      'Utils'
    ];
  }
}
