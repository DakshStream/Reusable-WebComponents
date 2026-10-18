import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedWebCompComponent } from './shared-web-comp.component';

describe('SharedWebCompComponent', () => {
  let component: SharedWebCompComponent;
  let fixture: ComponentFixture<SharedWebCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedWebCompComponent]
    });
    fixture = TestBed.createComponent(SharedWebCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
