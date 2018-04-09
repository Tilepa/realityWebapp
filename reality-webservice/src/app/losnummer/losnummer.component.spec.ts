import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosnummerComponent } from './losnummer.component';

describe('LosnummerComponent', () => {
  let component: LosnummerComponent;
  let fixture: ComponentFixture<LosnummerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosnummerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosnummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
