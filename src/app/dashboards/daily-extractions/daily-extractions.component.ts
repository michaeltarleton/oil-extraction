import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Report } from 'flexmonster'
import { data } from '../data/extractions.data'

@Component({
  selector: 'app-daily-extractions',
  templateUrl: './daily-extractions.component.html',
  styleUrls: ['./daily-extractions.component.scss'],
})
export class DailyExtractionsComponent implements OnInit {
  flexMonsterKey: string = environment.flexMonsterTrialKey

  report: Report = {
    dataSource: {
      dataSourceType: 'json',
      data,
    },
    options: {
      grid: {
        type: 'flat',
        showTotals: false,
        showGrandTotals: 'off',
      },
      datePattern: 'MM/dd/yyyy',
    },
  }

  constructor() {}

  ngOnInit() {}
}
