import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduItemsComponent } from './edu-items.component';

describe('EduItemsComponent', () => {
  let component: EduItemsComponent;
  let fixture: ComponentFixture<EduItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
