import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastingDepletionComponent } from './forecasting-depletion.component';

describe('ForecastingDepletionComponent', () => {
  let component: ForecastingDepletionComponent;
  let fixture: ComponentFixture<ForecastingDepletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastingDepletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastingDepletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
