import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionsDataGridComponent } from './extractions-data-grid.component';

describe('ExtractionsDataGridComponent', () => {
  let component: ExtractionsDataGridComponent;
  let fixture: ComponentFixture<ExtractionsDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractionsDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractionsDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
