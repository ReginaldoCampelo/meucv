import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCvComponent } from './new-cv.component';

describe('NewCvComponent', () => {
  let component: NewCvComponent;
  let fixture: ComponentFixture<NewCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCvComponent]
    });
    fixture = TestBed.createComponent(NewCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
