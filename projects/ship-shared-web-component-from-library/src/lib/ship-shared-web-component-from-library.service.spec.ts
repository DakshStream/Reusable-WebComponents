import { TestBed } from '@angular/core/testing';

import { ShipSharedWebComponentFromLibraryService } from './ship-shared-web-component-from-library.service';

describe('ShipSharedWebComponentFromLibraryService', () => {
  let service: ShipSharedWebComponentFromLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipSharedWebComponentFromLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
