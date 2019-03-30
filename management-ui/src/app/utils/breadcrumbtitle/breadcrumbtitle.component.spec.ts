import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbtitleComponent } from './breadcrumbtitle.component';

describe('BreadcrumbtitleComponent', () => {
  let component: BreadcrumbtitleComponent;
  let fixture: ComponentFixture<BreadcrumbtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
