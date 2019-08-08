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
    slice: {
      rows: [
        {
          uniqueName: 'extractionDate',
          sortName: 'unsorted',
        },
        {
          uniqueName: 'site',
          sortName: 'unsorted',
        },
        {
          uniqueName: 'well',
          sortName: 'unsorted',
        },
      ],
      columns: [
        {
          uniqueName: '[Measures]',
        },
      ],
      measures: [
        {
          uniqueName: 'oil',
          aggregation: 'sum',
        },
        {
          uniqueName: 'naturalGas',
          aggregation: 'sum',
        },
      ],
    },
    options: {
      viewType: 'charts',
      grid: {
        type: 'flat',
        showTotals: false,
        showGrandTotals: 'off',
      },
      chart: {
        type: 'line',
        activeMeasure: {
          uniqueName: 'oil',
          aggregation: 'sum',
        },
      },
      datePattern: 'MM/dd/yyyy',
    },
  }

  constructor() {}

  ngOnInit() {}
}
