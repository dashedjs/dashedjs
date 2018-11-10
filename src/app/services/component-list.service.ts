import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentListService {
  constructor() {}

  componentList(): string[] {
    return [
      'Button',
      'Card',
      'Checkbox',
      'Fab',
      'Footer',
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
      'Utils',

      'Select',
      'Slider',
      'Styles',
      'Tag',
      'Toggle',
      'Utils'
    ];
  }
}
