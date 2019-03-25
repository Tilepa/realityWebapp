import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordZiehungComponent } from './dashbord-ziehung.component';

describe('DashbordZiehungComponent', () => {
  let component: DashbordZiehungComponent;
  let fixture: ComponentFixture<DashbordZiehungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordZiehungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordZiehungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
