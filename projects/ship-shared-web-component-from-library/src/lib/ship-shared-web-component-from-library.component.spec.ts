import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipSharedWebComponentFromLibraryComponent } from './ship-shared-web-component-from-library.component';

describe('ShipSharedWebComponentFromLibraryComponent', () => {
  let component: ShipSharedWebComponentFromLibraryComponent;
  let fixture: ComponentFixture<ShipSharedWebComponentFromLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipSharedWebComponentFromLibraryComponent]
    });
    fixture = TestBed.createComponent(ShipSharedWebComponentFromLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
