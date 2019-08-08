import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DailyExtractionsComponent } from './daily-extractions.component'

describe('DailyExtractionsComponent', () => {
  let component: DailyExtractionsComponent
  let fixture: ComponentFixture<DailyExtractionsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DailyExtractionsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExtractionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
