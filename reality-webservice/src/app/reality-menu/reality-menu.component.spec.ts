import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealityMenuComponent } from './reality-menu.component';

describe('RealityMenuComponent', () => {
  let component: RealityMenuComponent;
  let fixture: ComponentFixture<RealityMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealityMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
