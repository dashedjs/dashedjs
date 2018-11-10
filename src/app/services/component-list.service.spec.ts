import { TestBed } from '@angular/core/testing';

import { ComponentListService } from './component-list.service';

describe('ComponentListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentListService = TestBed.get(ComponentListService);
    expect(service).toBeTruthy();
  });
});
