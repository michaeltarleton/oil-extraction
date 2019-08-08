import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentReservesComponent } from './current-reserves.component';

describe('CurrentReservesComponent', () => {
  let component: CurrentReservesComponent;
  let fixture: ComponentFixture<CurrentReservesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentReservesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
